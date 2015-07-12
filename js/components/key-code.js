define([
    'moves',
    'jquery'
], function(m) {
    'use strict';

    $(document).on('keyup', function(e) {
        for (var move in m.moves) {
            if (m.moves[move].key === e.keyCode) {
                m.moves[move].execute();
            }
        }
    });
});