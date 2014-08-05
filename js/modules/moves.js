define(function() {

    var moves = {
        block: {'movement': 'block', 'timing': 1000, 'key': 66, 'step': false, 'sound': false},
        cross: {'movement': 'cross', 'timing': 400, 'key': 67, 'step': false, 'sound': 'cross.wav'},
        crouch: {'movement': 'crouch', 'timing': 150, 'key': 40, 'step': false, 'sound': false},
        entrance: {'movement': 'entrance', 'timing': 8000, 'key': false, 'step': null, 'sound': false},
        fall: {'movement': 'fall', 'timing': 6500, 'key': 81, 'step': false, 'sound': 'fall.wav'},
        hook: {'movement': 'hook', 'timing': 400, 'key': 72, 'step': false, 'sound': 'hook.wav'},
        jab: {'movement': 'jab', 'timing': 200, 'key': 74, 'step': false, 'sound': 'jab.wav'},
        jump: {'movement': 'jump', 'timing': 1250, 'key': 38, 'step': false, 'sound': false},
        jumpingUppercut: {'movement': 'jumping-uppercut', 'timing': 1800, 'key': 52, 'step': false, 'sound': 'jumping-uppercut.wav'},
        uppercut: {'movement': 'uppercut', 'timing': 900, 'key': 85, 'step': false, 'sound': 'uppercut.wav'},
        walk: {'movement': 'walk', 'timing': 700, 'key': 39, 'step': 30, 'sound': false},
        walkBackwards: {'movement': 'walk-backwards', 'timing': 700, 'key': 37, 'step': -30, 'sound': false},
        walk: {'movement': 'walk', 'timing': 700, 'key': 39, 'step': 30, 'sound': false}
    };

    return {
         moves: moves
    };
});