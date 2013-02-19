Instamap.Views.PictureGridItem = Backbone.View.extend({

    tagName: 'li',
    className: 'gridItem',
    template: HandlebarsTemplates['pictures/picture_grid_item'],

    events: {
        'click' : 'showBigPicture'
    },

    initialize: function(){
        
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        return this;
    },

    showBigPicture: function() {
        var soloPicture = new Instamap.Views.SoloPicture({model: this.model});
        TINY.box.show({html: soloPicture.render().el,width:612,height:612});
    }

});