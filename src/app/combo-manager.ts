import { GameState } from './game-state';
import { moves } from './moves';
import { MoveConfig } from '../types/move-config';

export class ComboManager {
  static onMoveKey(key: string, pressedKeys: Set<string>): void {
    const move = moves.find((move: MoveConfig) => move.key === key);
    if (move && this.isMoveAllowed(move, pressedKeys)) {
      move.doMove();
    }
  }

  static requiresPosture(move: MoveConfig): boolean {
    return move.posture !== undefined;
  }

  static isMoveAllowed(move: MoveConfig, pressedKeys: Set<string>): boolean {
    if (!this.requiresPosture(move)) {
      return true;
    }
    if (move.posture === 'jumping') {
      return pressedKeys.has('ArrowUp');
    }
    return move.posture === GameState.playerPosture;
  }
}
