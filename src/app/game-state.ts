import { PlayerPosture } from '../types/posture';

export class GameState {
  static playerPositionX: number = 20;
  static playerFacing: 'right' | 'left' = 'right';
  static playerPosture: PlayerPosture = 'standing';
  static workingSpaceWidth: number = 679;

  static reset(): void {
    this.playerPositionX = 20;
    this.playerFacing = 'right';
    this.playerPosture = 'standing';
  }

  static movePlayer(step: number): void {
    this.playerPositionX += step;
  }

  static setPosture(posture: PlayerPosture): void {
    this.playerPosture = posture;
  }

  static setWorkingSpaceWidth(width: number): void {
    this.workingSpaceWidth = width;
  }
}
