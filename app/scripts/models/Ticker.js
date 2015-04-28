/*global Monolith, Backbone*/
Monolith.Models = Monolith.Models || {};

(function () {
  'use strict';
  Monolith.Models.Ticker = Backbone.Model.extend({
    defaults: {
      text: ""
    },

    url: 'http://localhost:4567/stops/1_578/ticker',

    initialize: function() {
    },

    parse: function(response, options)  {
      return response;
    }
  });
})();
