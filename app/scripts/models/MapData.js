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

    url: 'http://localhost:4567/stops/1_578/vicinity',

    initialize: function() {
      this.set(
        "nearby_stops", 
        new Monolith.Collections.NearbyStops()
      );
      this.set(
        "home_stop",
        new Monolith.Models.NearbyStop()
      );
    },
    
    validate: function(attrs, options) {},
    
    parse: function(response, options)  {
      this.get("nearby_stops").set(response.nearbyStops);
      this.get("home_stop").set(response.homeStop);
      return response;
    }
  });

})();
