import { character as c } from './character';
import { moves as m } from './moves';
import { keyCode } from './key-code';

var entrance = function() {
    c.addClass('stance');
    m.entrance.execute();
}();

export { entrance };