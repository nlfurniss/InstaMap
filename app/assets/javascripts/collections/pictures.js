Instamap.Collections.Pictures = Backbone.Collection.extend({

    baseUrl: '/api/v1/locations',
    model: Instamap.Models.Picture,
    url: function() {
        return this.baseUrl + '/' + this.locationId
    },

    initialize: function() {
    },
    
    retrieve: function(locationId) {
        this.locationId = locationId;
        this.fetch();
    }

});