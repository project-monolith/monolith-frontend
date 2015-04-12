/*global Monolith, Backbone, JST*/

Monolith.Views = Monolith.Views || {};

(function () {
    'use strict';

    Monolith.Views.RouteTile = Backbone.View.extend({

        template: JST['app/scripts/templates/RouteTile.ejs'],

        tagName: 'bus-route--tileitem',

        events: {},

        initialize: function (model) {
            //this.listenTo(this.model, 'change', this.render);
          this.model = model;
        },

        render: function () {
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
