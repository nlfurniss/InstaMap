Instamap.Views.LocationView = Backbone.View.extend({

    id: 'locationContainer',
    className: 'container',
    template: HandlebarsTemplates['locations/location'],

    events: {
    },

    initialize: function() {
        this.listenTo( this.collection, 'sync', this.renderPictures );
        this.locationId = this.model.get('id');
        this.collection.retrieve({ locationId: this.locationId, nextPage: false });
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        this.$('#picturesContainer').hide();
        this.$('#picturesContainer').on('scroll', this.loadMorePictures.bind(this));
        this.loadGoogleMap();
        return this;
    },

    renderPictures: function() {
        this.collection.each( function(model) {
            var picture = new Instamap.Views.PictureGridItem({model: model}).render();
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
        var map = new google.maps.Map( this.$('#mapContainer')[0], mapOptions );
        var marker = new google.maps.Marker({
                position: coordinates,
                map: map
        })
    },

    loadMorePictures: function() {
        var elem = $('#picturesContainer'),
            position = elem.scrollTop(),
            bottom = elem.prop('scrollHeight') - elem.height();
        if ( position === bottom && this.collection.where({id: this.collection.nextPagination})[0] ) {
            this.collection.retrieve({ locationId: this.locationId, nextPage: true });
        } else {
            elem.off('scroll', this.loadMorePictures);
        }
    }

});