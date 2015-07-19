define([
    'character',
    'quit',
    'jquery'
], function(c, q) {
    'use strict';

    class Action {
        constructor(movement, key, step, sound) {
            this.movement = movement;
            this.key = key;
            this.step = step;
            this.sound = sound;
        }
        animation() {
            var self = this;
            c.character.addClass(self.movement);
            c.character.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                c.character.removeClass(self.movement);
            });
        }
        execute() {
            var self = this;
            if (this.step !== false && !c.character.hasClass('entrance')) {
                c.character.css({
                    marginLeft: '+=' + this.step
                });
            }
            if (!c.character.hasClass(this.movement)) {
                if (this.sound !== false) {
                    let sound = new Audio('sounds/' + this.movement + '.mp3');
                    sound.oncanplay = function() {
                        sound.play();
                        self.animation();
                    };
                } else {
                    this.animation();
                }
            }
            if (this.key === 81) {
                q.quit();
            }
        }
    }

    return {
        Action: Action
    };
});