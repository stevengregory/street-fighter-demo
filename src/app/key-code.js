import { moves } from './moves';
import $ from '../vendor/jquery/dist/jquery.min.js';

// captures key press and iterates through moves object to execute move
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