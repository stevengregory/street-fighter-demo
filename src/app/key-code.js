import { moves } from './moves';
import $ from 'jquery';

export const keyCode = (() => {
  $(document).on('keyup', (e) => {
    for (let m in moves) {
      if (moves[m].key === e.keyCode) {
        moves[m].execute();
      }
    }
  });
})();