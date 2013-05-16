Instamap.Views.HomeView = Backbone.View.extend({

    id: 'homeContainer',
    className: 'container',
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
        Instamap.router.navigate( '/locations/' + query, {trigger: true} );
    }

});