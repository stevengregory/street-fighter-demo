define(['jquery', 'character'], function($, c) {
    'use strict';

    var quit = function() {
        var background = $('main');
        background.addClass('game-over');
        c.character.hide();
        $('.health').hide();
    };

    return {
        quit: quit
    };
});