import { character } from './character';
import { ActionParams } from '../types/action';

export default class Action {
  constructor(
    public movement: ActionParams['movement'],
    public key: ActionParams['key'],
    public step: ActionParams['step'],
    public sound: ActionParams['sound']
  ) {}

  private doAnimation(): void {
    character.addClass(this.movement);
    character.on(
      'webkitAnimationEnd oanimationend msAnimationEnd animationend',
      () => {
        character.removeClass(this.movement);
      }
    );
  }

  public doMove(): void {
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

  private getWalkingMoves(): string[] {
    return ['walk', 'walk-backwards'];
  }

  private isAnimating(): boolean {
    const classes = character.attr('class') ?? '';
    return classes
      .split(' ')
      .some(
        (className: string) =>
          className !== 'stance' &&
          className !== this.movement &&
          !this.getWalkingMoves().includes(className)
      );
  }

  private playSound(): void {
    const sound = new Audio(`sounds/${this.movement}.mp3`);
    sound.oncanplay = () => {
      sound.play();
      this.doAnimation();
    };
  }
}
