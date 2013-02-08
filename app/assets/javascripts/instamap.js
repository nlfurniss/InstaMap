window.Instamap = {
    Models: {},
    Views: {},
    Collections: {},
    Routers: {},
    Settings: {},
    
    initialize: function() {
        console.log('Starting InstaMap...');
        this.locations = new Instamap.Collections.Locations();
        this.pictures = new Instamap.Collections.Pictures();
        this.layout = new Instamap.Views.Layout().render();
        this.router = new Instamap.Routers.InstamapRouter({ parent: this });
        Backbone.history.start({ pushState: true });
        Backbone.history.started = true;
    }
};

$(function(){window.Instamap.initialize()});