Instamap.Views.LoginDialog = Backbone.View.extend({

    template: HandlebarsTemplates['login/login_dialog'],

    events: {
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html( this.template() );
        return this;
    }

});