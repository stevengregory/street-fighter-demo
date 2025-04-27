import { character } from './character';
import { ActionParams } from '../types/action';
import { GameState } from './game-state';
import { SoundManager } from './sound-manager';

export default class Action {
  constructor(
    public movement: ActionParams['movement'],
    public key: ActionParams['key'],
    public step: ActionParams['step'],
    public sound: ActionParams['sound'] = true
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
    this.updatePosture();
    if (this.step !== false) {
      character.css({
        marginLeft: '+=' + this.step
      });
      GameState.movePlayer(this.step);
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
    SoundManager.play(this.movement);
    this.doAnimation();
  }

  private updatePosture(): void {
    if (this.movement === 'duck') {
      GameState.setPosture('crouching');
    } else if (this.movement === 'jump') {
      GameState.setPosture('jumping');
    } else if (this.getWalkingMoves().includes(this.movement)) {
      GameState.setPosture('standing');
    }
  }
}
