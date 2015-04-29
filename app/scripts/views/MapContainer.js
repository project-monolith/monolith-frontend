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
          dispersePopups($popups);
          return this;
        }

    });

})();



function intersectRect(r1, r2) {
  return !(r2.left > r1.right || 
           r2.right < r1.left || 
           r2.top > r1.bottom ||
           r2.bottom < r1.top);
}



function calcOffsets(r1, r2) {
  var up = Math.max(0, r1.bottom - r2.top);
  var right = Math.max(0, r2.right - r1.left);
  var down = Math.max(0, r2.bottom - r1.top);
  var left = Math.max(0, r1.right - r2.left);
  
  return {
    up: up,
    right: right, 
    down: down,  
    left: left
  };
}



function movePopups(p1, p2, diffs) {
  if ((diffs.down < 60) && (diffs.down > 0)) {
    console.log("Moving down by " + diffs.down);
    p1.style.top = parseInt(p1.style.top) + diffs.down / 2 + "px";
    p2.style.top = parseInt(p2.style.top) - diffs.down / 2 + "px";
  }
  else if ((diffs.up < 30) && (diffs.up > 0)) {
    console.log("Moving up by " + diffs.up);
    p1.style.top = parseInt(p1.style.top) - diffs.up / 2 + "px";
    p2.style.top = parseInt(p2.style.top) + diffs.up / 2 + "px";
  }
  else if ((diffs.left > 0) && ((diffs.left < diffs.right) || (diffs.right <= 0))) {
    console.log("Moving left by " + diffs.left);
    p1.style.left = parseInt(p1.style.left) - diffs.left / 2 + "px";
    p2.style.left = parseInt(p2.style.left) + diffs.left / 2 + "px";
  }
  else if (diffs.right > 0) {
    console.log("Moving right by " + diffs.right);
    p1.style.left = parseInt(p1.style.left) + diffs.right / 2 + "px";
    p2.style.left = parseInt(p2.style.left) - diffs.right / 2 + "px";
  }
  
  return p1.children[0].getBoundingClientRect();
}



function dispersePopups($popups) {
  for (var i = 0; i < $popups.length; i++) {
    var rect = $popups[i].children[0].getBoundingClientRect();
    if (i > 0) {
      for (var j = 0; j < i; j++) {
        var other = $popups[j].children[0].getBoundingClientRect();
        if (intersectRect(rect, other)) {
          console.log("Collision: " + i + ", " + j);
          var diffs = calcOffsets(rect, other);
          rect = movePopups($popups[i], $popups[j], diffs);
        }
      }
    }
  }
}