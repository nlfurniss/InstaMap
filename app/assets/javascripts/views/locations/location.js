Instamap.Views.LocationView = Backbone.View.extend({

    id: 'locationContainer',
    className: 'container',
    template: HandlebarsTemplates['locations/location'],

    events: {
        'click .gridItem' : 'showDetailView'
    },

    initialize: function() {
        this.listenTo( this.collection, 'reset', this.render );
        this.locationId = this.model.get('id');
        this.collection.retrieve(this.locationId);
    },

    render: function() {
        var numToDisplay = function(length) {
            if ( length > 12 ) {
                return 12;
            }
            else if ( length > 4 && length % 4 === 0 || length < 4 ) {
                return length;
            }
            else {
                return length - (length % 4 );
            }
        };
        this.$el.html( this.template({ images: this.collection.first( numToDisplay(this.collection.length) ), model: this.model.attributes }) );
        return this;
    },

    showDetailView: function(event) {
        // this.$el.css('margin', '10px 40px 0').css('float', 'right');
        // var largePicture = '<div id="largePicture" class="container"></div>'
        // this.$el.append(largePicture);
        var url = $(event.currentTarget).data('large-image');
        console.log(url);
        TINY.box.show({image:url,width:612,height:612});
    }

});