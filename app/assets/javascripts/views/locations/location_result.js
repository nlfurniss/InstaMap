Instamap.Views.LocationsResult = Backbone.View.extend({

    tagName: 'li',
    className: 'location clickable',
    attributes: function() {
      return { 'data-location-id': this.model.get('id') };
    },
    template: HandlebarsTemplates['locations/location_result'],

    events: {
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        return this;
    }

});