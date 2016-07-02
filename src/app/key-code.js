import { moves } from './moves';
import $ from '../vendor/jquery/dist/jquery.min.js';

export var keyCode = function() {
    $(document).on('keyup', function(e) {
        for (var m in moves) {
            if (moves[m].key === e.keyCode) {
                moves[m].execute();
            }
        }
    });
}();