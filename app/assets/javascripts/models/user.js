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

    like: function(picture_id) {
        $.ajax({
            url: this.urlRoot + '/' + this.get('id') + '/like',
            type: 'GET',
            dataType: 'json',
            data: {picture_id: picture_id}
        })
    }

});