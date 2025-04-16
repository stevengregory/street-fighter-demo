import { default as Action } from './action';

export default (function getMoves() {
  return [
    new Action('walk', 'ArrowRight', 30, false),
    new Action('walk-backwards', 'ArrowLeft', -30, false),
    new Action('jab', 'j', false),
    new Action('cross', 'c', false),
    new Action('hook', 'h', false),
    new Action('uppercut', 'u', false),
    new Action('jumping-uppercut', '1', false),
    new Action('jump', 'ArrowUp', false, false),
    new Action('duck', 'ArrowDown', false, false),
    new Action('block', 'b', false, false),
    new Action('fall', 'f', false),
    new Action('rest', 'r', false, false)
  ];
})();
