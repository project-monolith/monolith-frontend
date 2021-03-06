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
      this.fetch();
      // Set up poll of data
      setInterval((function() {
        this.fetch();
      }).bind(this), 5 * 1000);
    },

    parse: function(response, options)  {
      this.set("text", response);
    }
  });
})();
