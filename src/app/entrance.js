import { stance } from './character';
import { moves as m } from './moves';
import { keyCode } from './key-code';

// game entry point that kicks off the entrance move
(() => {
    m.entrance.execute();
})();