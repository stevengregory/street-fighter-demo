import { default as Action } from './action';

(() => {
  return new Action('entrance', false, false, false).doMove();
})();
