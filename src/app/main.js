import Action from './action';
import './key-code';
import '../sass/style.scss';

(() => {
  return new Action('entrance', false, false, false).doMove();
})();
