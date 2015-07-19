define([
    'action'
], function(a) {
    'use strict';

    var moves = {
        walk: new a.Action('walk', 39, 30, false),
        walkBackwards: new a.Action('walk-backwards', 37, -30, false),
        jab: new a.Action('jab', 74, false),
        cross: new a.Action('cross', 67, false),
        hook: new a.Action('hook', 72, false),
        uppercut: new a.Action('uppercut', 85, false),
        jumpingUppercut: new a.Action('jumping-uppercut', 52, false),
        jump: new a.Action('jump', 38, false, false),
        duck: new a.Action('duck', 40, false, false),
        block: new a.Action('block', 66, false, false),
        fall: new a.Action('fall', 81, false),
        entrance: new a.Action('entrance', false, false, false)
    };

    return {
        moves: moves
    };
});