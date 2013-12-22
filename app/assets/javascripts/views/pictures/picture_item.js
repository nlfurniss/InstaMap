Instamap.Views.PictureGridItem = Backbone.View.extend({

    tagName: 'li',
    className: 'gridItem clickable',
    template: HandlebarsTemplates['pictures/picture_grid_item'],

    events: {
        'click a' : 'showBigPicture'
    },

    initialize: function(){
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        return this;
    },

    showBigPicture: function(event) {
        if ( !Instamap.isMobile() ) {
            event.preventDefault();
            var soloPicture = new Instamap.Views.SoloPicture({model: this.model});
            TINY.box.show({html: soloPicture.render().el,
                width: this.model.get('images').standard_resolution.width,
                height: this.model.get('images').standard_resolution.height
            });
        }
    }

});