define([
    'character',
    'jquery'
], function(c) {
    'use strict';

    var quit = function() {
        $('main').addClass('game-over');
        $('.health').hide();
        c.character.hide();
    };

    return {
        quit: quit
    };
});