/*global Monolith, Backbone*/

Monolith.Models = Monolith.Models || {};

(function () {
    'use strict';

  Monolith.Models.NearbyStop = Backbone.Model.extend({
    defaults: {
      name: "stop",
      id: "",
      routes: [],
      direction: "",
      location: {
        lon: 0,
        lat: 0
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
