Instamap.Views.LocationsResult = Backbone.View.extend({

    tagName: 'li',
    className: 'location',
    attributes: function() {
      return { 'data-location-id': this.model.get('foursquare_v2_id') };
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