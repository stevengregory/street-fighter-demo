import { Action } from './action';
import { keyCode } from './key-code';

(() => {
  const entrance = new Action('entrance', false, false, false);
  entrance.doMove();
})();