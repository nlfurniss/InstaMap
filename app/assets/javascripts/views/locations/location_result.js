Instamap.Views.LocationsResult = Backbone.View.extend({

    tagName: 'li',
    className: 'location clickable',
    template: HandlebarsTemplates['locations/location_result'],

    events: {
        'click' : 'openLocation'
    },

    initialize: function() {
    },

    render: function() {
        this.$el.html( this.template(this.model.attributes) );
        return this;
    },

    openLocation: function() {
        var locationId = this.model.get('id');
        Instamap.router.navigate( '/location/' + locationId, {trigger: true} );
    }

});