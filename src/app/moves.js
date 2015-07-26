import { Action } from './action';

// object that implements the action class with the command pattern
var moves = {
    walk: new Action('walk', 39, 30, false),
    walkBackwards: new Action('walk-backwards', 37, -30, false),
    jab: new Action('jab', 74, false),
    cross: new Action('cross', 67, false),
    hook: new Action('hook', 72, false),
    uppercut: new Action('uppercut', 85, false),
    jumpingUppercut: new Action('jumping-uppercut', 52, false),
    jump: new Action('jump', 38, false, false),
    duck: new Action('duck', 40, false, false),
    block: new Action('block', 66, false, false),
    fall: new Action('fall', 81, false),
    entrance: new Action('entrance', false, false, false)
};

export { moves };