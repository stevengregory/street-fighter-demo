import { Action } from './action';

export const moves = [
  new Action('walk', 39, 30, false),
  new Action('walk-backwards', 37, -30, false),
  new Action('jab', 74, false),
  new Action('cross', 67, false),
  new Action('hook', 72, false),
  new Action('uppercut', 85, false),
  new Action('jumping-uppercut', 52, false),
  new Action('jump', 38, false, false),
  new Action('duck', 40, false, false),
  new Action('block', 66, false, false),
  new Action('fall', 81, false),
  new Action('rest', 82, false, false)
];