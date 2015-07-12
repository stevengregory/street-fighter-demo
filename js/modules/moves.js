define([
    'action'
], function(a) {
    'use strict';

    var moves = {
        walk: new a.Action('walk', 39, 30, false),
        walkBackwards: new a.Action('walk-backwards', 37, -30, false),
        jab: new a.Action('jab', 74, false, 'jab.mp3'),
        cross: new a.Action('cross', 67, false, 'cross.mp3'),
        hook: new a.Action('hook', 72, false, 'hook.mp3'),
        uppercut: new a.Action('uppercut', 85, false, 'uppercut.mp3'),
        jumpingUppercut: new a.Action('jumping-uppercut', 52, false, 'jumping-uppercut.mp3'),
        combo: new a.Action('combo', 49, false, 'combo.mp3'),
        combo2: new a.Action('combo-2', 50, false, 'combo2.mp3'),
        specialCombo: new a.Action('special-combo', 51, false, 'special.mp3'),
        jump: new a.Action('jump', 38, false, false),
        duck: new a.Action('duck', 40, false, false),
        block: new a.Action('block', 66, false, false),
        fall: new a.Action('fall', 81, false, 'fall.mp3'),
        entrance: new a.Action('entrance', false, false, false)
    };

    return {
        moves: moves
    };
});