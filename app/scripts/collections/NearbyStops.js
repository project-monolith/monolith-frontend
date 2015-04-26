/*global Kiosk, Backbone*/

Monolith.Collections = Monolith.Collections || {};

(function () {
    'use strict';

    Monolith.Collections.NearbyStops = Backbone.Collection.extend({

        model: Monolith.Models.NearbyStop

    });

})();
