Instamap.Routers.InstamapRouter = Backbone.Router.extend({

    initialize: function(options) {
        this.$el = $('#contentContainer');
        this.locations = options.parent.locations;
        this.pictures = options.parent.pictures;
        this.currentView = null;
    },

    swap: function(newView) {
        if ( this.currentView ) {
            this.currentView.remove();
        }
        this.pictures.reset({ silent: true });
        this.currentView = newView;
        var html = this.currentView.render().el;
        this.$el.hide();
        this.$el.empty().append(html);
        this.$el.slideDown("slow");
    },

    routes: {
        ""                      : "home",
        "locations"             : "locations",
        "locations/:locationId" : "location",
    },

    home: function() {
        console.log('Home!');
        var homeView = new Instamap.Views.HomeView({ collection: this.locations });
        this.swap(homeView);
    },

    locations: function() {
        console.log('Locations!');
        var locationsView = new Instamap.Views.LocationsView({ collection: this.locations });
        this.swap(locationsView);
    },

    location: function(locationId) {
        console.log('Location!');
        var locationView = new Instamap.Views.LocationView({
            collection: this.pictures,
            model: this.locations.where({ id: locationId })[0]
        });
        this.swap(locationView);
    }

});