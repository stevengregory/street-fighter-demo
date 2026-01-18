import type { MoveConfig } from '../types/move-config';
import { Posture } from '../types/posture';
import { GameState } from './game-state';
import { getPlayer } from './player';
import { getPosture } from './posture';
import { SoundManager } from './sound-manager';

export default class Action {
  constructor(
    public movement: MoveConfig['movement'],
    public key: MoveConfig['key'],
    public step: MoveConfig['step'],
    public sound: MoveConfig['sound'] = true,
    public posture?: MoveConfig['posture'],
    public requiredKeys?: MoveConfig['requiredKeys'],
  ) {}

  private doAnimation(player: HTMLElement): void {
    player.classList.add(this.movement);
    player.addEventListener(
      'animationend',
      () => {
        player.classList.remove(this.movement);
        if (GameState.playerPosture !== Posture.Standing && this.posture) {
          GameState.setPosture(Posture.Standing);
        }
      },
      { once: true },
    );
  }

  public doMove(): void {
    if (this.isBlocked()) {
      return;
    }
    this.updatePosture();
    this.withPlayer((player) => {
      if (this.step !== false) {
        this.moveCharacter(this.step, player);
        GameState.movePlayer(this.step);
      }
      if (!player.classList.contains(this.movement)) {
        this.sound !== false
          ? this.playSound(player)
          : this.doAnimation(player);
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
      ...this.getWalkingMoves(),
    ]);
    return classes.some((className) => !allowedClasses.has(className));
  }

  private moveCharacter(step: number, player: HTMLElement): void {
    const current = Number.parseFloat(
      getComputedStyle(player).marginLeft || '0',
    );
    player.style.marginLeft = `${current + step}px`;
  }

  private playSound(player: HTMLElement): void {
    SoundManager.play(this.movement);
    this.doAnimation(player);
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
