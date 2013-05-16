Instamap.Collections.Locations = Backbone.Collection.extend({

    url: '/api/v1/search',
    model: Instamap.Models.Location,

    initialize: function() {
    },

    query: function(options) {
        var params = {}
        if ( options.searchQuery ){
            params.search_query = options.searchQuery;
        }
        this.fetch({ data: params });
    }

});