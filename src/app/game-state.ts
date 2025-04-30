import { Posture } from '../types/posture';

export class GameState {
  static playerPositionX: number = 20;
  static playerFacing: 'right' | 'left' = 'right';
  static playerPosture: Posture = Posture.Standing;
  static workingSpaceWidth: number = 679;

  static reset(): void {
    this.playerPositionX = 20;
    this.playerFacing = 'right';
    this.playerPosture = Posture.Standing;
  }

  static movePlayer(step: number): void {
    this.playerPositionX += step;
  }

  static setPosture(posture: Posture): void {
    this.playerPosture = posture;
  }

  static setWorkingSpaceWidth(width: number): void {
    this.workingSpaceWidth = width;
  }
}
