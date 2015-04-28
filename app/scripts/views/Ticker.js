/*global Monolith, Backbone, JST*/
Monolith.Views = Monolith.Views || {};
(function () {
  'use strict';

  Monolith.Views.Ticker = Backbone.View.extend({
    template: JST['app/scripts/templates/Ticker.ejs'],
    tagName: 'div',
    id: '',
    className: 'bus-route--ticker-container',
    events: {},

    initialize: function (model) {
      this.model = model;
      this.listenTo(this.model, 'change', this.render);
    },

    start: function() {
      // Configure the ticker
	    this.$("ul#ticker").liScroll({travelocity: 0.15});
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    }
 });

})();
