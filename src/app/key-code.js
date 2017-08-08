import { moves } from './moves';
import $ from 'jquery';

export const keyCode = (() => {
  $(document).on('keyup', (e) => {
    const isMove = (move, key) => move.key === e.keyCode;
    const getMove = moves => moves.filter(isMove);
    getMove(moves).length ? getMove(moves)[0].doMove() : null;
  });
})();