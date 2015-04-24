/*global Monolith, Backbone*/

Monolith.Models = Monolith.Models || {};

(function () {
    'use strict';

    Monolith.Models.MapData = Backbone.Model.extend({
      defaults: {
        id: 1,
        // the collection of routes at this station
        bus_routes: null
      },

      url: 'http://localhost:4567/stops/1_578/proximity',

      initialize: function() {
         this.set("nearby_stops",  new Monolith.Collections.NearbyStops());
     },

      validate: function(attrs, options) {
      },

      parse: function(response, options)  {
        console.log(response);
        this.get("nearby_stops").set(response);
        return response;
      }
    });

})();
