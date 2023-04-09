import $ from 'jquery';
import moves from './moves';

export default (function getKeyCode() {
  $(document).on('keyup', (e) => {
    const isMove = (move) => move.key === e.key;
    const getMove = (move) => move.filter(isMove);
    getMove(moves).length && getMove(moves)[0].doMove();
  });
})();
