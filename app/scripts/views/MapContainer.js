/*global Monolith, Backbone, JST*/

Monolith.Views = Monolith.Views || {};

(function () {
    'use strict';

    Monolith.Views.MapContainer = Backbone.View.extend({

        template: JST['app/scripts/templates/MapContainer.ejs'],

        tagName: 'div',

        id: '',

        className: 'map--container',

        events: {},

        initialize: function (model) {
          this.model = model;
          this.model.fetch();
// TODO: replace this with a refresh method that doesn't redraw the map
          this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
          this.$el.html(this.template(this.model.toJSON()));
          return this;
        }

    });

})();
