/*global Monolith, Backbone*/

Monolith.Models = Monolith.Models || {};

(function () {
    'use strict';

    Monolith.Models.BusStation = Backbone.Model.extend({
      defaults: {
        id: 1,
        // the collection of routes at this station
        bus_routes: null
      },

      url: 'http://localhost:4567/stops/1_578/trips',

      initialize: function() {
        this.set("bus_routes",  new Monolith.Collections.BusRoutes());

        // Set up poll of data
        setInterval((function() {
          this.fetch();
        }).bind(this), 5 * 1000);
      },

      validate: function(attrs, options) {
      },

      parse: function(response, options)  {
        this.set("name", response.name);
        this.set("id", response.id);
        this.get("bus_routes").set(response.routes);
        this.get("bus_routes").comparator = "order";
        return response;
      }
    });

})();
