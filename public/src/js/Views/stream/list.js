// Filename: views/stream/list.js
define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/stream/list.html'
], function($, _, Backbone, streamListTemplate) {

    var projectListView = Backbone.View.extend({
        initialize: function( el ) {
            this.el = el;
        },
        render: function( data ) {
            var data = {
                entries: data.entries,
                _: _
            };
            var compiledTemplate = _.template( streamListTemplate, data );
            this.el.html( compiledTemplate );
        }
    });
    
    return new projectListView;
});
