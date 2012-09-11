define([
    'jquery',
    'underscore',
    'backbone',
    'router',
    'stream',
], function( $, _, Backbone, Router, Stream ){
    var initialize = function() {
        Router.initialize();
        Stream.initialize();
    }

    return {
        initialize: initialize
    };
});