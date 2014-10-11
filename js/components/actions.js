define(['jquery', 'character', 'quit'], function($, c, q) {

    var Action = function(movement, key, step, sound) {
        this.movement = movement;
        this.key = key;
        this.step = step;
        this.sound = sound;
    };

    Action.prototype.execute = function() {
        var self = this;
        var animation = function() {
            c.character.addClass(self.movement);
            c.character.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                c.character.removeClass(self.movement);
            });
        };
        if (this.step !== false && !c.character.hasClass('entrance')) {
            c.character.css({
                marginLeft: '+=' + this.step
            });
        }
        if (!c.character.hasClass(this.movement)) {
            if (this.sound !== false) {
                var sound = new Audio('sounds/' + this.sound);
                sound.oncanplay = function() {
                    sound.play();
                    animation();
                };
            } else {
                animation();
            }
        }
        if (this.key === 81) {
            q.quit();
        }
    };

    var actions = {
        walk: new Action('walk', 39, 30, false),
        walkBackwards: new Action('walk-backwards', 37, -30, false),
        jab: new Action('jab', 74, false, 'jab.wav'),
        cross: new Action('cross', 67, false, 'cross.wav'),
        hook: new Action('hook', 72, false, 'hook.wav'),
        uppercut: new Action('uppercut', 85, false, 'uppercut.wav'),
        jumpingUppercut: new Action('jumping-uppercut', 52, false, 'jumping-uppercut.wav'),
        combo: new Action('combo', 49, false, 'combo.wav'),
        combo2: new Action('combo-2', 50, false, 'combo2.wav'),
        specialCombo: new Action('special-combo', 51, false, 'special.wav'),
        jump: new Action('jump', 38, false, false),
        duck: new Action('duck', 40, false, false),
        block: new Action('block', 66, false, false),
        fall: new Action('fall', 81, false, 'fall.wav'),
        entrance: new Action('entrance', false, false, false)
    };

    return {
        actions: actions
    };
});