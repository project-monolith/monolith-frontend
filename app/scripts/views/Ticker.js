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
      this.$("ul#ticker").liScroll({travelocity: 0.1});
    },

    render: function () {
      var model;
      model = this.model.toJSON();
      if(model.text.length > 0) {
        $(this.$el).empty();
        this.$el.html(this.template(model));
        this.start();
      }

      return this;
    }
 });

})();
