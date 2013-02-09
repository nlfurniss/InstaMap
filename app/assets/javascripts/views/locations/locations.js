Instamap.Views.LocationsView = Backbone.View.extend({

    id: 'locationsContainer',
    className: 'container',
    template: HandlebarsTemplates['locations/locations'],

    events: {
        'click .location' : 'openLocation'
    },

    initialize: function() {
        this.listenTo( this.collection, 'reset', this.render );
        this.collection.query({ searchQuery: this.collection.searchQuery });
    },

    render: function() {
        this.$el.html( this.template({ query: this.collection.searchQuery }) );
        this.buildLocations();
        return this;
    },

    buildLocations: function() {
        if ( this.collection.length > 0 ) {
            //console.log('lots of locations');
            this.collection.each( function(location) {
                var result = new Instamap.Views.LocationsResult({ model: location });
                this.$('#locationsList').append(result.render().el);
            });
        } else {
            //console.log('no results');
            //this.$('#locationsContainer').append('<p>no results</p>');
        }
    },

    openLocation: function(event) {
        event.preventDefault();
        locationId = $(event.currentTarget).data('location-id');
        Instamap.router.navigate( '/locations/' + locationId, {trigger: true} );
    }

});