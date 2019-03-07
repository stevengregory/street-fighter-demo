import Action from './action';
import './key-code';

(() => {
  const entrance = new Action('entrance', false, false, false);
  entrance.doMove();
})();
