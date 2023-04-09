import Action from './action';
import './key-code';
import '../sass/style.scss';

(() => {
  const entrance = new Action('entrance', false, false, false);
  entrance.doMove();
})();
