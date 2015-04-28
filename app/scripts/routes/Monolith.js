/*global Monolith, Backbone*/

Monolith.Routers = Monolith.Routers || {};

(function () {
    'use strict';

    Monolith.Routers.Monolith = Backbone.Router.extend({
      routes: {
        "": "startMonolith"
      },

      startMonolith: function() {
        this.station = new Monolith.Views.BusStation(
          $('body')
        );
        this.station.render();
      }

    });

})();
