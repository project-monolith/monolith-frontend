/*global Monolith, $*/


window.Monolith = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
    }
};

$(document).ready(function () {
    'use strict';
    Monolith.init();
    Monolith.app = new Monolith.Routers.Monolith();
    Backbone.history.start()
});
