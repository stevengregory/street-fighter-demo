define([
    'character',
    'moves',
    'jquery',
    'keyCode'
], function(c, m) {
    'use strict';

    var entrance = function() {
        m.moves.entrance.execute();
        c.character.addClass('stance');
    };

    return {
        entrance: entrance
    };
});