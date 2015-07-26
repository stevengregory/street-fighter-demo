import { moves } from './moves';
import $ from '../vendor/jquery/dist/jquery.min.js';

/**
 * @desc Captures key press and iterates through moves object to execute move
 * @function keyCode
 */
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