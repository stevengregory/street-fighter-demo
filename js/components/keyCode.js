define(['jquery', 'actions'], function($, a) {
    'use strict';

    $(document).on('keyup', function(e) {
        for (var move in a.actions) {
            if (a.actions[move].key === e.keyCode) {
                a.actions[move].execute();
            }
        }
    });
});