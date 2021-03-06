window.Instamap = {
    Models: {},
    Views: {},
    Collections: {},
    Routers: {},
    settings: {},
    
    initialize: function() {
        console.log('Starting InstaMap...');

        this.ViewHelpers.initialize();
        this.locationData = window.locationData || {};

        this.isMobile = function() {
            return matchMedia("(max-width: 540px)").matches;
        }
        this.isTablet = function() {
            return matchMedia("(max-width: 960px) and (min-width: 540px)").matches;
        }

        if ( localStorage.userId ) {
            this.user = new Instamap.Models.User({ id: localStorage.userId });
            console.log('Fetching stored user...');
            this.user.retrieve();
        } else {
            this.user = new Instamap.Models.User();
        }
        this.locations = new Instamap.Collections.Locations();
        this.pictures = new Instamap.Collections.Pictures();
        this.layout = new Instamap.Views.Layout().render();
        this.router = new Instamap.Routers.InstamapRouter({ parent: this });
        Backbone.history.start({ pushState: true });
        Backbone.history.started = true;
    }
};

$(function(){window.Instamap.initialize();});