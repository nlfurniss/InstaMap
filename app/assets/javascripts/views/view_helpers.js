Instamap.ViewHelpers = {

    initialize: function(){
        for( var helper in this ){
            if( this[helper] === this.initialize ) continue;
            Handlebars.registerHelper(helper, this[helper]);
        }
    },

    // Neat way of doing inline templates
    // http://zachsnow.com/#!/blog/2012/handlebarsjs/
    include: function(template, options){
        var partial = HandlebarsTemplates[template],
            context = _.extend({}, this, options.hash );
        return new Handlebars.SafeString(partial(context));
    },

    loggedInUser: function() {
        return ( Instamap.user.get('access_token') ) ? true: false;
    }
}