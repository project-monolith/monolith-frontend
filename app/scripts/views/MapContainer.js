/*global Monolith, Backbone, JST*/

Monolith.Views = Monolith.Views || {};

(function () {
    'use strict';

    Monolith.Views.MapContainer = Backbone.View.extend({

        template: JST['app/scripts/templates/MapContainer.ejs'],

        tagName: 'div',

        id: '',

        className: 'map--container',

        events: {},

        initialize: function (model) {
          this.model = model;
          this.model.fetch();
// TODO: replace this with a refresh method that doesn't redraw the map
          this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
          this.$el.html(this.template(this.model.toJSON()));
          var $popups = $('.leaflet-popup-pane .leaflet-popup');
          var rectangles = [];
          for (var i = 0; i < $popups.length; i++) {
            var rect = $popups[i].children[0].getBoundingClientRect();
            if (i > 0) {
              for (var j = 0; j < i; j++) {
                var other = $popups[j].children[0].getBoundingClientRect();
                if (
                      (
                        (rect.left >= other.left) &&
                        (rect.left <= other.right) ||
                        (rect.right <= other.right) &&
                        (rect.right >= other.left) 
                      ) && (
                        (rect.top >= other.top) &&
                        (rect.top <= other.bottom) ||
                        (rect.bottom <= other.bottom) &&
                        (rect.bottom >= other.top)
                      )
                  ) {
                  console.log("Collision: " + i + ", " + j);
                  console.log(other);
                  console.log(rect);
                  var diffs = [
                      (rect.bottom - other.top),
                      (rect.left - other.right),
                      (other.bottom - rect.top),
                      (other.right - rect.left)
                  ];
                  console.log(diffs);
                  var posdiffs = [
                      Math.abs(diffs[0]),
                      Math.abs(diffs[1]),
                      Math.abs(diffs[2]),
                      Math.abs(diffs[3])
                  ];
                  var mindiff = Math.min.apply(Math, posdiffs);
                  if (diffs[0] === mindiff) {
                    $popups[i].style.top=(rect.top - mindiff) + "px";
                    console.log("Moving " + i + " up by " + mindiff);
                  }
                  else if (diffs[1] === mindiff) {
                    $popups[i].style.left=(other.right) + "px";
                    console.log("Moving " + i + " right by " + mindiff);
                  }
                  else if (diffs[2] === mindiff) {
                    $popups[i].style.top=(other.bottom) + "px";
                    console.log("Moving " + i + " down by " + mindiff);
                  }
                  else {
                    $popups[i].style.left=(rect.left - mindiff) + "px";
                    console.log("Moving " + i + " left by " + mindiff);
                  }
                  rect = $popups[i].getBoundingClientRect();
                  console.log($popups[i]);
                  console.log(rect);
                }
              }
            }
            rectangles.push(rect);
          }
          console.log(rectangles);
          return this;
        }

    });

})();
