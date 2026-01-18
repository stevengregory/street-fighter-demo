import { Posture } from '../types/posture';

export const GameState = {
  playerPositionX: 20,
  playerFacing: 'right' as 'right' | 'left',
  playerPosture: Posture.Standing,
  workingSpaceWidth: 679,

  reset(): void {
    GameState.playerPositionX = 20;
    GameState.playerFacing = 'right';
    GameState.playerPosture = Posture.Standing;
  },

  movePlayer(step: number): void {
    GameState.playerPositionX += step;
  },

  setPosture(posture: Posture): void {
    GameState.playerPosture = posture;
  },

  setWorkingSpaceWidth(width: number): void {
    GameState.workingSpaceWidth = width;
  },
};
