define(['jquery', 'character', 'quit'], function($, c, q) {

    var start = function() {

        var Action = function (movement, timing, key, step, sound) {
            this.movement = movement;
            this.timing = timing;
            this.key = key;
            this.step = step;
            this.sound = sound;
        };

        var stopAction = function(move, time) {
            return setTimeout(function() { c.character.removeClass(move); }, time);
        };

        Action.prototype.execute = function() {
            if (!c.character.hasClass(this.movement)) {
                c.character.addClass(this.movement);
                stopAction(this.movement, this.timing);
                if (this.sound !== false) {
                    var sound = new Audio(config.SOUND_DIR + this.sound);
                    sound.play();
                }
            }
            if (this.step !== false && !c.character.hasClass('entrance')) {
                $(c.character).css({ marginLeft: '+=' + this.step });
            }
            if (this.key === 81) {
                q.quit();
            }
        };

        var actions = {
            walk: new Action('walk', 700, 39, 30, false),
            walkBackwards: new Action('walk-backwards', 700, 37, -30, false),
            jab: new Action('jab', 200, 74, false, 'jab.wav'),
            cross: new Action('cross', 400, 67, false, 'cross.wav'),
            hook: new Action('hook', 400, 72, false, 'hook.wav'),
            uppercut: new Action('uppercut', 900, 85, false, 'uppercut.wav'),
            jumpingUppercut: new Action('jumping-uppercut', 1800, 52, false, 'jumping-uppercut.wav'),
            combo: new Action('combo', 1250, 49, false, 'combo.wav'),
            combo2: new Action('combo-2', 2600, 50, false, 'combo2.wav'),
            specialCombo: new Action('special-combo', 2600, 51, false, 'special.wav'),
            jump: new Action('jump', 1250, 38, false, false),
            crouch: new Action('crouch', 150, 40, false, false),
            block: new Action('block', 1000, 66, false, false),
            fall: new Action('fall', 6500, 81, false, 'fall.wav'),
            entrance: new Action('entrance', 8000, false, null, false)
        };

        var entrance = function() {
            actions.entrance.execute();
            c.character.addClass('stance');
        }();

        $(document).on('keyup', function(e) {
            for (move in actions) {
                if (actions[move].key === e.keyCode) {
                    actions[move].execute();
                }
            }
        });
    };

    return {
        start: start
    };
});