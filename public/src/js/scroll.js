define([
    'jquery'
], function( $ ){
    var scrollTo = function(y, dur) {
        var dur = dur||500;
        $('html,body').animate({scrollTop: y}, dur);
    },
    scrollToId = function(id, dur) {
        var el = document.getElementById(id);
        if (!el) {
            alert("Dude - how should I scroll to \""+id+"\", when there is no element with this ID..?");
            return;
        }
        scrollTo(el.offsetTop);
    }

    return {
        to: scrollTo,
        toId: scrollToId
    };
});