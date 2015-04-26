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

        initialize: function (body, model) {
          this.body = body;
          this.model = model;
          this.model.fetch();
          this.listenTo(this.model.get("bus_routes"),'add remove', this.render);
        },

        render: function () {
          if(this.model) {
            // Create all the routes
            this.$el.html(this.template(this.model.toJSON()));
// Note from Eldan: I'm very unsure about switching to .prepend() here
// but otherwise the map ends up above the rest.            
            this.body.prepend(this.$el);
            this.model.get("bus_routes").each((function(_this) {
              return function (busRoute) {
                _this.$('.bus-route--container').append(
                  new Monolith.Views.RouteTile(busRoute).render().$el
                );
              };
            })(this)
            );
          }
          return this;
        }

    });

})();
