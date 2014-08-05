define(['jquery', 'character', 'actions'], function($, c, a) {

    var entrance = function() {
        a.actions.entrance.execute();
        c.character.addClass('stance');
    };

    return {
         entrance: entrance
    };
});