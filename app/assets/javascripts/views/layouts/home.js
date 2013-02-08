Instamap.Views.HomeView = Backbone.View.extend({

    id: 'homeContainer',
    template: HandlebarsTemplates['layouts/home'],

    events: {
        'submit #searchForm' : 'search'
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html( this.template() );
        return this;
    },

    search: function(event) {
        event.preventDefault();
        var query = this.$('input').val();
        this.collection.searchQuery = query;
        Instamap.router.navigate( '/locations', {trigger: true} );
    }

});