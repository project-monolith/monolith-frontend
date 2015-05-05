/*global Monolith, Backbone*/

Monolith.Models = Monolith.Models || {};

(function () {
    'use strict';

  Monolith.Models.NearbyStop = Backbone.Model.extend({
    defaults: {
      stopName: "stop",
      stopId: "",
      stopRoutes: [],
      stopDirection: "",
      stopLocation: {
        pointLon: 0,
        pointLat: 0
      }
    },

    initialize: function() {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
        return response;
    }
  });

})();
