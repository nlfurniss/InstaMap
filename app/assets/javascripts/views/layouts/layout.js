Instamap.Views.Layout = Backbone.View.extend({

    id: 'mainContainer',
    template: HandlebarsTemplates['layouts/main'],

    events: {
        'click #homeLink' : 'goHome'
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html( this.template() );
        $('body').html(this.$el);
        return this;
    },

    goHome: function(event) {
        event.preventDefault();
        Instamap.router.navigate('/', {trigger: true});
    }

});