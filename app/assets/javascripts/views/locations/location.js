Instamap.Views.LocationView = Backbone.View.extend({

    id: 'locationContainer',
    className: 'container',
    template: HandlebarsTemplates['locations/location'],

    events: {
    },

    initialize: function() {
        this.listenTo( this.collection, 'reset', this.render );
        this.locationId = this.model.get('id');
        this.collection.retrieve(this.locationId);
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        this.$('#picturesContainer').hide();
        this.renderPictures();
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
        try{
            var map = new google.maps.Map( document.getElementById('mapContainer'), mapOptions );
            var marker = new google.maps.Marker({
                position: coordinates,
                map: map
            })
        }
        catch(error){console.log(error);}
    }

});