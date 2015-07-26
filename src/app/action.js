import { character as c, quit } from './character';

/**
 * @class Action
 */
class Action {

    /** 
     * @constructs Action
     */
    constructor(movement, key, step, sound) {
        this.movement = movement;
        this.key = key;
        this.step = step;
        this.sound = sound;
    }

    /**
     * @desc Add and removes character movement
     * @method animation
     */
    animation() {
        var self = this;
        c.addClass(self.movement);
        c.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            c.removeClass(self.movement);
        });
    }

    /**
     * @desc Performs the character sound and movement
     * @method execute
     */
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
            quit();
        }
    }
}

export { Action };