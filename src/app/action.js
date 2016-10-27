import { character, quit } from './character';

export class Action {

  constructor(movement, key, step, sound) {
    this.movement = movement;
    this.key = key;
    this.step = step;
    this.sound = sound;
  }

  animation() {
    character.addClass(this.movement);
    character.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', () => {
      character.removeClass(this.movement);
    });
  }

  execute() {
    if (this.step !== false && !character.hasClass('entrance')) {
      character.css({
        marginLeft: '+=' + this.step
      });
    }
    if (!character.hasClass(this.movement)) {
      if (this.sound !== false) {
        let sound = new Audio(`sounds/${this.movement}.mp3`);
        sound.oncanplay = () => {
          sound.play();
          this.animation();
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