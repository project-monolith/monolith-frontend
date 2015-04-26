/*global Monolith, Backbone*/

Monolith.Models = Monolith.Models || {};

(function () {
    'use strict';

  Monolith.Models.NearbyStop = Backbone.Model.extend({
    defaults: {
      name: "stop",
      lat: 0,
      lon: 0,
      routes: []
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
