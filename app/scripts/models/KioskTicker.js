/*global Monolith, Backbone*/

Monolith.Models = Monolith.Models || {};

(function () {
    'use strict';

    Monolith.Models.MonolithTicker = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
