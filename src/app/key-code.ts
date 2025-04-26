import { default as moves } from './moves';
import { ActionParams } from '../types/action';

export default (function getMove() {
  onkeyup = (e) => {
    const isMove = (move: ActionParams) => move.key === e.key;
    const move = moves.find(isMove);
    return move && move.doMove();
  };
})();
