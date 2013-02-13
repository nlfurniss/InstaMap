Instamap.Views.LocationView = Backbone.View.extend({

    id: 'locationContainer',
    className: 'container',
    template: HandlebarsTemplates['locations/location'],

    events: {
        //'click .gridItem' : 'showBigPicture'
    },

    initialize: function() {
        this.listenTo( this.collection, 'reset', this.render );
        this.locationId = this.model.get('id');
        this.collection.retrieve(this.locationId);
    },

    render: function() {
        // var numToDisplay = function(length) {
        //     if ( length > 12 ) {
        //         return 12;
        //     }
        //     else if ( length > 4 && length % 4 === 0 || length < 4 ) {
        //         return length;
        //     }
        //     else {
        //         return length - (length % 4 );
        //     }
        // };
        //this.$el.html( this.template({ images: this.collection.first( numToDisplay(this.collection.length) ), model: this.model.attributes }) );
        this.$el.html( this.template({ model: this.model.attributes }) );
        this.$('#picturesContainer').hide();
        this.renderPictures();
        this.loadGoogleMap();
        return this;
    },

    renderPictures: function() {
        this.collection.each( function(model) {
            var picture = new Instamap.Views.PictureItem({model: model}).render();
            this.$('#picturesContainer').append( picture.el );
        });
        this.$('#picturesContainer').show();
    },

    loadGoogleMap: function() {
        var coordinates = new google.maps.LatLng(this.model.get('location').lat, this.model.get('location').lng );
        var mapOptions = {
                zoom: 15,
                center: coordinates,
                mapTypeId: google.maps.MapTypeId.ROADMAP 
            }
        try{
            var map = new google.maps.Map( document.getElementById('mapContainer'), mapOptions );
            var marker = new google.maps.Marker({
                position: coordinates,
                map: map
            })
        }
        catch(error){console.log(error);}
    },

    // showBigPicture: function(event) {
    //     var url = $(event.currentTarget).data('large-image');
    //     TINY.box.show({image:url,width:612,height:612});
    // }

});