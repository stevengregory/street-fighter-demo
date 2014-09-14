define(['jquery', 'character'], function($, c) {

    var quit = function() {
        var background = $('main');
        background.addClass('game-over');
        c.character.hide();
    };

    return {
         quit: quit
    };
});