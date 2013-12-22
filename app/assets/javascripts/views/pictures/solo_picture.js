Instamap.Views.SoloPicture = Backbone.View.extend({

    id: 'soloPictureContainer',
    template: HandlebarsTemplates['pictures/solo_picture'],

    events: {
      'click #likeIcon' : 'likePicture'  
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        return this;
    },

    likePicture: function(event) {
        event.preventDefault();
        Instamap.user.like(this.model.get('id'));
    }

});