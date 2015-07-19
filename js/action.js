import { character as c } from './character';
import { quit as q } from './quit';

class Action {
    constructor(movement, key, step, sound) {
        this.movement = movement;
        this.key = key;
        this.step = step;
        this.sound = sound;
    }
    animation() {
        var self = this;
        c.addClass(self.movement);
        c.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            c.removeClass(self.movement);
        });
    }
    execute() {
        var self = this;
        if (this.step !== false && !c.hasClass('entrance')) {
            c.css({
                marginLeft: '+=' + this.step
            });
        }
        if (!c.hasClass(this.movement)) {
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
            q();
        }
    }
}

export { Action };