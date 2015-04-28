/*global Kiosk, Backbone, JST*/

Monolith.Views = Monolith.Views || {};

(function () {
  'use strict';
  Monolith.Views.BusStation = Backbone.View.extend({
    template: JST['app/scripts/templates/BusStation.ejs'],
    className: 'bus-station--container',

    events: {},

    initialize: function ($rootDOM) {
      this.$rootDOM = $rootDOM;
    },

    render: function () {
      this.routes = new Monolith.Views.RouteContainer(
        new Monolith.Models.BusStation()
      );
      this.ticker = new Monolith.Views.Ticker(
        new Monolith.Models.Ticker()
      );
      this.map = new Monolith.Views.MapContainer(
        new Monolith.Models.MapData()
      );
      this.$el.html(this.template())
      this.$(".bus-station--section-route").append(this.routes.render().el)
      this.$(".bus-station--section-ticker").append(this.ticker.render().el)
      this.$(".bus-station--section-map").append(this.map.render().el)
      this.$rootDOM.append(this.$el);
    }

    });

})();
