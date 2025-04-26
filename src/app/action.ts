import { character } from './character';

export default class Action {
  constructor(movement, key, step, sound) {
    this.movement = movement;
    this.key = key;
    this.step = step;
    this.sound = sound;
  }

  private doAnimation() {
    character.addClass(this.movement);
    character.on(
      'webkitAnimationEnd oanimationend msAnimationEnd animationend',
      () => {
        character.removeClass(this.movement);
      }
    );
  }

  public doMove() {
    if (this.isAnimating()) {
      return;
    }
    if (this.step !== false) {
      character.css({
        marginLeft: '+=' + this.step
      });
    }
    if (!character.hasClass(this.movement)) {
      this.sound !== false ? this.playSound() : this.doAnimation();
    }
  }

  private getWalkingMoves() {
    return ['walk', 'walk-backwards'];
  }

  private isAnimating() {
    return character
      .attr('class')
      .split(' ')
      .some(
        (className) =>
          className !== 'stance' &&
          className !== this.movement &&
          !this.getWalkingMoves().includes(className)
      );
  }

  private playSound() {
    const sound = new Audio(`sounds/${this.movement}.mp3`);
    sound.oncanplay = () => {
      sound.play();
      this.doAnimation();
    };
  }
}
