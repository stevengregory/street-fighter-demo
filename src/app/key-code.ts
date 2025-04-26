import { default as moves } from './moves';

export default (function getMove() {
  onkeyup = (e) => {
    const isMove = (move) => move.key === e.key;
    const move = moves.find(isMove);
    return move && move.doMove();
  };
})();
