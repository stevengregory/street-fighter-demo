import { moves as m } from './moves';
import $ from '../vendor/jquery/dist/jquery.min.js';

var keyCode = function() {
    $(document).on('keyup', function(e) {
        for (var move in m) {
            if (m[move].key === e.keyCode) {
                m[move].execute();
            }
        }
    });
}();

export { keyCode };