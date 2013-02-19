Instamap.Models.Picture = Backbone.Model.extend({

    likesEndpoint: function() { return 'https://api.instagram.com/v1/media/' + this.get('id') +'/likes' },

    initialize: function() {
        
    },

    like: function() {
        $.ajax({
            url: this.likesEndpoint(),
            type: 'POST',
            dataType: 'json',
            data: {access_token: Instamap.user.get('access_token')}
        })
    }

});