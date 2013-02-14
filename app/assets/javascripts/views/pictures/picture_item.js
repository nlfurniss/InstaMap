Instamap.Views.PictureItem = Backbone.View.extend({

    tagName: 'li',
    className: 'gridItem',
    template: HandlebarsTemplates['pictures/picture_item'],

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
        var url = this.model.get('images').standard_resolution.url;
        TINY.box.show({image:url,width:612,height:612});
    }

});