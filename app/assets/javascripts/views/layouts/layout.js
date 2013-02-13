Instamap.Views.Layout = Backbone.View.extend({

    id: 'mainContainer',
    template: HandlebarsTemplates['layouts/main'],

    events: {
        'click #homeLink'     : 'goHome',
        'click #signInButton' : 'openLoginModal'
    },

    initialize: function() {
        this.listenTo( Instamap.user, 'user:loaded', this.reRenderFooter );
    },

    render: function() {
        this.$el.html( this.template() );
        $('body').html(this.$el);
        return this;
    },

    goHome: function(event) {
        event.preventDefault();
        Instamap.router.navigate('/', {trigger: true});
    },

    openLoginModal: function(event) {
        event.preventDefault();
        window.open('/instagram/authorize', 'instagramPopup', 'top=' + (screen.height/2)-(475/2) + ',left=' + (screen.height/2)-(800/2) + ',height=475,width=800,toolbar=0,scrollbars=0,status=0,menuBar=0');
    },

    reRenderFooter: function() {
        this.$('footer').html( HandlebarsTemplates['layouts/footer']() );
    }

});