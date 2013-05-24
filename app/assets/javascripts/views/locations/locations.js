Instamap.Views.LocationsView = Backbone.View.extend({

    id: 'locationsContainer',
    className: 'container',
    template: HandlebarsTemplates['locations/locations'],

    events: {
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
    }

});