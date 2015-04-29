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
      this.set(
        "nearby_stops", 
        new Monolith.Collections.NearbyStops()
      );
// TODO: replace this with reading from the backend, when that side is implemented      
      this.set(
        "location_data",
        {
          "lat": 47.61029,
          "lon": -122.338173,
          "id": "1_578",
          "name": "3rd Ave & Pike St"
        }
      );
    },
    
    validate: function(attrs, options) {},
    
    parse: function(response, options)  {
      this.get("nearby_stops").set(response);
      return response;
    }
  });

})();
