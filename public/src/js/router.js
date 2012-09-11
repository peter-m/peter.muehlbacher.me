// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'scroll'
], function( $, _, Backbone, Scroll ){
    var AppRouter = Backbone.Router.extend({
        routes: {
            'goto:*id': 'scroll',
            '*x': 'defaultRoute'
        },
        scroll: function(id) {
            console.log("scroll");
            setTimeout(function () {
                if (document.body.scrollTop === 0) { // only scroll down if we're on the top - it's already confusing enough ;)
                    Scroll.toId(id);
                }
            }, 1000);
        },
        defaultRoute: function() {
            console.log("defaultRoute");
            setTimeout(function () {
                if (document.body.scrollTop === 0) { // only scroll down if we're on the top - it's already confusing enough ;)
                    Scroll.toId("main-content");
                }
            }, 1000);
        }
    });

    var initialize = function(){
        var app_router = new AppRouter;
        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});