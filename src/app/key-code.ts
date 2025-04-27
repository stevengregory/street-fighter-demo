import Action from './action';
import { moves } from './moves';

export default (function getMove() {
  onkeyup = (e) => {
    const isMove = (move: Action) => move.key === e.key;
    const move = moves.find(isMove);
    return move && move.doMove();
  };
})();
