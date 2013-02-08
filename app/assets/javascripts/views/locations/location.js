Instamap.Views.LocationView = Backbone.View.extend({

    id: 'locationContainer',
    template: HandlebarsTemplates['locations/location'],

    events: {
    },

    initialize: function() {
        //this.listenTo( this.collection, 'reset', this. );
        //this.listenTo( this.model, 'change', this.render );
        this.locationId = this.model.get('foursquare_v2_id');
        this.collection.retrieve(this.locationId);
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        return this;
    }

});