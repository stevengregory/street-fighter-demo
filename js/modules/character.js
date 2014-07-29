define(['jquery'], function($) {

    var start = function() {
        characterActions();
    };

    var characterActions = function() {
        var character = $('main span');

        var Move = function (movement, timing, key, step, sound) {
            this.movement = movement;
            this.timing = timing;
            this.key = key;
            this.step = step;
            this.sound = sound;
        };

        var stopMove = function (move, time) {
            return setTimeout(function() { character.removeClass(move); }, time);
        };

        Move.prototype.execute = function() {
            if (!character.hasClass(this.movement)) {
                character.addClass(this.movement);
                stopMove(this.movement, this.timing);
                if (this.sound !== false) {
                    var sound = new Audio(config.SOUND_DIR + this.sound);
                    sound.play();
                }
            }
            if (this.step !== false && !character.hasClass('entrance')) {
                $(character).css({ marginLeft: '+=' + this.step });
            }
            if (this.key === 81) {
                quitGame();
            }
        };

        var moves = {
            walk: new Move('walk', 700, 39, 30, false),
            walkBackwards: new Move('walk-backwards', 700, 37, -30, false),
            jab: new Move('jab', 200, 74, false, 'jab.wav'),
            cross: new Move('cross', 400, 67, false, 'cross.wav'),
            hook: new Move('hook', 400, 72, false, 'hook.wav'),
            uppercut: new Move('uppercut', 900, 85, false, 'uppercut.wav'),
            jumpingUppercut: new Move('jumping-uppercut', 1800, 52, false, 'jumping-uppercut.wav'),
            combo: new Move('combo', 1250, 49, false, 'combo.wav'),
            combo2: new Move('combo-2', 2600, 50, false, 'combo2.wav'),
            specialCombo: new Move('special-combo', 2600, 51, false, 'special.wav'),
            jump: new Move('jump', 1250, 38, false, false),
            crouch: new Move('crouch', 150, 40, false, false),
            block: new Move('block', 1000, 66, false, false),
            fall: new Move('fall', 6500, 81, false, 'fall.wav'),
            entrance: new Move('entrance', 8000, false, null, false)
        };

        var entrance = function() {
            moves.entrance.execute();
            character.addClass('stance');
        }();

        var quitGame = function () {
            var background = $('main');
            background.addClass('game-over');
            character.hide();
            moves = {};
        };

        $(document).on('keyup', function(e) {
            for (move in moves) {
                if (moves[move].key === e.keyCode) {
                    moves[move].execute();
                }
            }
        });
    };

    return {
        start: start
    };
});