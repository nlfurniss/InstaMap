Instamap.Models.User = Backbone.Model.extend({

    urlRoot: '/api/v1/users',

    initialize: function() {
        this.listenTo( this, 'change:id', this.storeId );
    },

    retrieve: function() {
        this.fetch({ success: this.success, silent: true });
    },

    success: function(model, response, options) {
        model.trigger( 'user:loaded' );
    },

    storeId: function() {
        localStorage.userId = this.get('id');
        console.log('Stored user id in localStorage');
    },

    addLike: function() {
        
    },

    removeLike: function() {
        
    }

});