Instamap.Routers.InstamapRouter = Backbone.Router.extend({

    initialize: function(options) {
        this.$el = $('#contentContainer');
        this.locations = options.parent.locations;
        this.pictures = options.parent.pictures;
        this.locationData = options.parent.locationData;
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
        "locations/:query"      : "locations",
        "location/:locationId"  : "location",
    },

    home: function() {
        console.log('Home!');
        var homeView = new Instamap.Views.HomeView({ collection: this.locations });
        this.swap(homeView);
    },

    locations: function(query) {
        console.log('Location Results!');
        var locationsView = new Instamap.Views.LocationsView({ collection: this.locations, query: query });
        this.swap(locationsView);
    },

    location: function(locationId) {
        console.log('Location!');
        var model;
        if ( this.locations.where({ id: locationId })[0] ) {
            model = this.locations.where({ id: locationId })[0];
        } else {
            model = new Instamap.Models.Location(this.locationData);
        }

        var locationView = new Instamap.Views.LocationView({
            collection: this.pictures,
            model: model
        });
        this.swap(locationView);
    }

});