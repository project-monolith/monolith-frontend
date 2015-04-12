/*global Monolith, Backbone*/

Monolith.Routers = Monolith.Routers || {};

(function () {
    'use strict';

    Monolith.Routers.Monolith = Backbone.Router.extend({
      routes: {
        "": "startMonolith"
      },

      startMonolith: function() {
        var tile = new Monolith.Views.RouteTile(
          new Monolith.Models.BusRoute()
        );
        this.station = new Monolith.Views.RouteContainer(
          $('body'),
          new Monolith.Models.BusStation()
        )
      }

    });

})();
