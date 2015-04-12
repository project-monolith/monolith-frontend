/*global Monolith, Backbone*/

Monolith.Collections = Monolith.Collections || {};

(function () {
    'use strict';

    Monolith.Collections.BusRoutes = Backbone.Collection.extend({
      model: Monolith.Models.BusRoute
    });

})();
