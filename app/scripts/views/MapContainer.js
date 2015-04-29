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
            console.log($popups[i]);
            var rect = $popups[i].getBoundingClientRect();
            if (i > 0) {
              for (var j = 0; j < i; j++) {
                var other = $popups[j].getBoundingClientRect();
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
                  console.log(rect);
                  console.log(other);
                  var diffs = [
                      Math.abs(rect.bottom - other.top),
                      Math.abs(rect.left - other.right),
                      Math.abs(other.bottom - rect.top),
                      Math.abs(other.right - rect.left)
                  ];
                  var mindiff = Math.min.apply(Math, diffs);
                  if (diffs[0] === mindiff) {
                    $popups[i].css("margin-top", 0 - mindiff);
                  }
                  else if (diffs[1] === mindiff) {
                    $popups[i].css("margin-right", mindiff);
                  }
                  else if (diffs[2] === mindiff) {
                    $popups[i].css("margin-top", mindiff);
                  }
                  else {
                    $popups[i].css("margin-top", 0 - mindiff);
                  }
                  
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
