import { GameState } from './game-state';
import { getPlayer } from './player';
import { getPosture } from './posture';
import { MoveConfig } from '../types/move-config';
import { Posture } from '../types/posture';
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
    this.withPlayer((player) => {
      player.classList.add(this.movement);
      player.addEventListener(
        'animationend',
        () => {
          player.classList.remove(this.movement);
          if (GameState.playerPosture !== Posture.Standing && this.posture) {
            GameState.setPosture(Posture.Standing);
          }
        },
        { once: true }
      );
    });
  }

  public doMove(): void {
    if (this.isBlocked()) {
      return;
    }
    this.updatePosture();
    if (this.step !== false) {
      this.moveCharacter(this.step);
      GameState.movePlayer(this.step);
    }
    this.withPlayer((player) => {
      if (!player.classList.contains(this.movement)) {
        if (this.sound !== false) {
          this.playSound();
        } else {
          this.doAnimation();
        }
      }
    });
  }

  private getBasicMoves(): string[] {
    return ['jump', 'duck', 'stance'];
  }

  private getCurrentClasses(): string[] {
    const player = getPlayer();
    return player?.className.split(' ') ?? [];
  }

  private getWalkingMoves(): string[] {
    return ['walk', 'walk-backwards'];
  }

  private isBlocked(): boolean {
    if (this.movement === 'entrance') {
      return false;
    }
    const classes = this.getCurrentClasses();
    const allowedClasses = new Set([
      this.movement,
      ...this.getBasicMoves(),
      ...this.getWalkingMoves()
    ]);
    return classes.some((className) => !allowedClasses.has(className));
  }

  private moveCharacter(step: number): void {
    this.withPlayer((player) => {
      const current = parseFloat(getComputedStyle(player).marginLeft || '0');
      player.style.marginLeft = `${current + step}px`;
    });
  }

  private playSound(): void {
    SoundManager.play(this.movement);
    this.doAnimation();
  }

  private updatePosture(): void {
    const posture = getPosture(this.movement);
    if (posture) {
      GameState.setPosture(posture);
    }
  }

  private withPlayer(callback: (el: HTMLElement) => void): void {
    const player = getPlayer();
    if (player) {
      callback(player);
    }
  }
}
