/*global Monolith, Backbone*/

Monolith.Collections = Monolith.Collections || {};

(function () {
    'use strict';

    Monolith.Collections.BusWaitTimes = Backbone.Collection.extend({
      model: Monolith.Models.BusWaitTime
    });

})();
