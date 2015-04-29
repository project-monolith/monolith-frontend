/*global Monolith, Backbone, JST*/

Monolith.Views = Monolith.Views || {};

(function () {
    'use strict';

    Monolith.Views.RouteContainer = Backbone.View.extend({

        template: JST['app/scripts/templates/RouteContainer.ejs'],

        tagName: 'div',

        id: '',

        className: 'bus-station',

        events: {
        },

        initialize: function (model) {
          this.model = model;
          this.model.fetch();
          this.listenTo(this.model.get("bus_routes"),'add remove', this.render);
          this.listenTo(this.model.get("bus_routes"),'change', this.update);
        },

        update: function () {
          if(this.$(".bus-route--container").length > 0) {
            this.$(".bus-route--container").empty();
            this.model.sortAlphNum();
            // TODO: clean up this spaghetti
            this.renderTiles();
          }
        },

        render: function () {
          if(this.model) {
            this.renderTiles();
          }
          return this;
        },

        renderTiles: function () {
          this.$el.html(this.template(this.model.toJSON()));
          this.model.get("bus_routes").each(
              (function (busRoute) {
                this.$('.bus-route--container').append(
                  new Monolith.Views.RouteTile(busRoute).render().$el
                  );
                }).bind(this)
            );
        }

    });

})();
