import { Posture } from '../types/posture';

export class GameState {
  static playerPositionX: number = 20;
  static playerFacing: 'right' | 'left' = 'right';
  static playerPosture: Posture = Posture.Standing;
  static workingSpaceWidth: number = 679;

  static reset(): void {
    GameState.playerPositionX = 20;
    GameState.playerFacing = 'right';
    GameState.playerPosture = Posture.Standing;
  }

  static movePlayer(step: number): void {
    GameState.playerPositionX += step;
  }

  static setPosture(posture: Posture): void {
    GameState.playerPosture = posture;
  }

  static setWorkingSpaceWidth(width: number): void {
    GameState.workingSpaceWidth = width;
  }
}
