/*global Monolith, Backbone, JST*/

Monolith.Views = Monolith.Views || {};

(function () {
    'use strict';

    Monolith.Views.RouteTile = Backbone.View.extend({

        template: JST['app/scripts/templates/RouteTile.ejs'],

        className: 'bus-route--tileitem-container',

        events: {},

        initialize: function (model) {
          this.model = model;
          this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
          $(this.$el).empty()

          if (this.model) {
            this.$el.html(this.template(this.model.toJSON()));
          }
          else {
            this.$el.html(this.template());
          }
          return this;
        }

    });

})();
