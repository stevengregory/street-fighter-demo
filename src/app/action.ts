import { character } from './character';
import { MoveConfig } from '../types/move-config';
import { GameState } from './game-state';
import { SoundManager } from './sound-manager';

export default class Action {
  constructor(
    public movement: MoveConfig['movement'],
    public key: MoveConfig['key'],
    public step: MoveConfig['step'],
    public sound: MoveConfig['sound'] = true,
    public posture?: MoveConfig['posture'],
    public requiredKeys?: MoveConfig['requiredKeys']
  ) {}

  private doAnimation(): void {
    character.addClass(this.movement);
    character.on(
      'webkitAnimationEnd oanimationend msAnimationEnd animationend',
      () => {
        character.removeClass(this.movement);
        if (GameState.playerPosture !== 'standing' && this.posture) {
          GameState.setPosture('standing');
        }
      }
    );
  }

  public doMove(): void {
    if (this.isAnimating()) {
      return;
    }
    this.updatePosture();
    if (this.step !== false) {
      this.moveCharacter(this.step);
      GameState.movePlayer(this.step);
    }
    if (!character.hasClass(this.movement)) {
      this.sound !== false ? this.playSound() : this.doAnimation();
    }
  }

  private getBasicMoves(): string[] {
    return ['jump', 'duck', 'stance'];
  }

  private getCurrentClasses(): string[] {
    return character.attr('class')?.split(' ') ?? [];
  }

  private getWalkingMoves(): string[] {
    return ['walk', 'walk-backwards'];
  }

  private isAnimating(): boolean {
    const classes = this.getCurrentClasses();
    const allowedClasses = new Set([
      this.movement,
      ...this.getBasicMoves(),
      ...this.getWalkingMoves()
    ]);
    return classes.some((className) => !allowedClasses.has(className));
  }

  private moveCharacter(step: number): void {
    character.css({
      marginLeft: '+=' + step
    });
  }

  private playSound(): void {
    SoundManager.play(this.movement);
    this.doAnimation();
  }

  private updatePosture(): void {
    if (this.posture) {
      GameState.setPosture(this.posture);
    } else if (this.movement === 'duck') {
      GameState.setPosture('crouching');
    } else if (this.movement === 'jump') {
      GameState.setPosture('jumping');
    } else if (this.getWalkingMoves().includes(this.movement)) {
      GameState.setPosture('standing');
    }
  }
}
