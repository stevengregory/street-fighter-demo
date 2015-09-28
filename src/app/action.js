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
        c.addClass(this.movement);
        c.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
            c.removeClass(this.movement);
        }.bind(this));
    }

    /**
     * @desc Performs the character sound and movement
     * @method execute
     */
    execute() {
        if (this.step !== false && !c.hasClass('entrance')) {
            c.css({
                marginLeft: '+=' + this.step
            });
        }
        if (!c.hasClass(this.movement)) {
            if (this.sound !== false) {
                let sound = new Audio(`sounds/${this.movement}.mp3`);
                sound.oncanplay = function() {
                    sound.play();
                    this.animation();
                }.bind(this);
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