Instamap.Views.LocationsView = Backbone.View.extend({

    id: 'locationsContainer',
    className: 'container',
    template: HandlebarsTemplates['locations/locations'],

    events: {
        'click .location' : 'openLocation'
    },

    initialize: function() {
        this.listenTo( this.collection, 'reset', this.render );
        this.collection.query({ searchQuery: this.options.query });
    },

    render: function() {
        this.$el.html( this.template({ query: decodeURIComponent(this.options.query) }) );
        this.buildLocations();
        return this;
    },

    buildLocations: function() {
        if ( this.collection.length > 0 ) {
            this.collection.each( function(location) {
                var result = new Instamap.Views.LocationsResult({ model: location });
                this.$('#locationsList').append(result.render().el);
            });
        } else {
            this.$('#locationsContainer').append('<p>No Results :-(</p>');
        }
    },

    openLocation: function(event) {
        event.preventDefault();
        locationId = $(event.currentTarget).data('location-id');
        Instamap.router.navigate( '/location/' + locationId, {trigger: true} );
    }

});