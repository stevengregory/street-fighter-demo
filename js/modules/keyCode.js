define(['jquery', 'actions'], function($, a) {

    $(document).on('keyup', function(e) {
        for (move in a.actions) {
            if (a.actions[move].key === e.keyCode) {
                a.actions[move].execute();
            }
        }
    });
});