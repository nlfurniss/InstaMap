Instamap.Collections.Pictures = Backbone.Collection.extend({

    baseUrl: '/api/v1/locations',
    model: Instamap.Models.Picture,
    nextPagination: null,

    url: function() {
        return this.baseUrl + '/' + this.locationId;
    },

    initialize: function() {
    },
    
    retrieve: function(options) {
        this.locationId = options.locationId;
        var data = {}
        if ( options.nextPage ){ data.next_page = this.nextPagination; }
        this.fetch({ data: data });
    },

    parse: function(response) {
        this.nextPagination = response.pagination.next_max_id;
        return response.data;
    }

});