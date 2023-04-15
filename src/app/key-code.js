import { default as moves } from './moves';

export default (function getMove() {
  onkeyup = (e) => {
    const isMove = (move) => move.key === e.key;
    const getMove = (move) => move.filter(isMove);
    return getMove(moves).length && getMove(moves)[0].doMove();
  };
})();
