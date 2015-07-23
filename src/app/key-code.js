import { moves } from './moves';
import $ from '../vendor/jquery/dist/jquery.min.js';

var keyCode = () => {
    $(document).on('keyup', function(e) {
        for (var m in moves) {
            if (moves[m].key === e.keyCode) {
                moves[m].execute();
            }
        }
    });
}();

export { keyCode };