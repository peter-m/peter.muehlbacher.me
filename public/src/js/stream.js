// Filename: stream.js
define([
    'jquery',
    'underscore',
    'backbone',
    'scroll',
    'Models/blog',
    'Views/stream/list'
], function( $, _, Backbone, Scroll, Blog, StreamListView ) {
    
    var initialize = function() {
        StreamListView.initialize($('#main-content'));
        StreamListView.render(Blog);
    };

    return {
        initialize: initialize
    };
});