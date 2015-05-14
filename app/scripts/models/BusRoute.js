/*global Monolith, Backbone*/

Monolith.Models = Monolith.Models || {};

(function () {
    'use strict';

  Monolith.Models.BusRoute = Backbone.Model.extend({
    defaults: {
      number: "-1",
      description: "default description",
    },

    initialize: function() {
    },

    validate: function(attrs, options) {
    },

    parse: function(response, options)  {
      this.set("routeTrips", new Monolith.Collections.BusWaitTimes(this.get("trips"))); //_.each(this.get("wait_times"), function(waitTimes) {
      //  this.set("wait_times", new Monolith.Views.BusWaitTimes(waitTimes));
      //}, this);
        return response;
    }
  });

})();
