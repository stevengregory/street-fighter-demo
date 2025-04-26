import { default as Action } from './action';

export default (function getMoves(): Action[] {
  return [
    new Action('block', 'b', false, false),
    new Action('corkscrew-blow', '2', false),
    new Action('cross', 'c', false),
    new Action('dart-shot', 'd', false),
    new Action('duck', 'ArrowDown', false, false),
    new Action('fall', 'f', false),
    new Action('hook', 'h', false),
    new Action('jab', 'j', false),
    new Action('jet-uppercut', '1', false),
    new Action('jump', 'ArrowUp', false, false),
    new Action('rest', 'r', false, false),
    new Action('uppercut', 'u', false),
    new Action('walk', 'ArrowRight', 30, false),
    new Action('walk-backwards', 'ArrowLeft', -30, false),
  ];
})();
