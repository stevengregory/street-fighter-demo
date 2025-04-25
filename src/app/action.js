import { character } from './character';

export default class Action {
  constructor(movement, key, step, sound) {
    this.movement = movement;
    this.key = key;
    this.step = step;
    this.sound = sound;
  }

  doAnimation() {
    character.addClass(this.movement);
    character.on(
      'webkitAnimationEnd oanimationend msAnimationEnd animationend',
      () => {
        character.removeClass(this.movement);
      }
    );
  }

  doMove() {
    if (this.isAnimating(this.movement)) {
      return;
    }
    if (this.step !== false && !character.hasClass('entrance')) {
      character.css({
        marginLeft: '+=' + this.step
      });
    }
    if (!character.hasClass(this.movement)) {
      this.sound !== false ? this.playSound() : this.doAnimation();
    }
  }

  isAnimating(movement) {
    return character
      .attr('class')
      .split(' ')
      .some((className) => className !== 'stance' && className !== movement);
  }

  playSound() {
    const sound = new Audio(`sounds/${this.movement}.mp3`);
    sound.oncanplay = () => {
      sound.play();
      this.doAnimation();
    };
  }
}
