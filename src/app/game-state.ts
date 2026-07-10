import { Posture } from '../types/posture';

export const GameState = {
  playerPositionX: 20,
  playerPosture: Posture.Standing,

  movePlayer(step: number): void {
    GameState.playerPositionX += step;
  },

  setPosture(posture: Posture): void {
    GameState.playerPosture = posture;
  },
};
