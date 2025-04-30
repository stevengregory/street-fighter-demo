import { GameState } from './game-state';
import { moves } from './moves';
import { MoveConfig } from '../types/move-config';

export class ComboManager {
  static onMoveKey(key: string, pressedKeys: Set<string>): void {
    const possibleMoves = moves.filter((move: MoveConfig) => move.key === key);
    for (const move of possibleMoves) {
      if (this.isMoveAllowed(move, pressedKeys)) {
        move.doMove();
        return;
      }
    }
  }

  static requiresPosture(move: MoveConfig): boolean {
    return move.posture !== undefined;
  }

  static isMoveAllowed(move: MoveConfig, pressedKeys: Set<string>): boolean {
    if (move.requiredKeys === false) {
      return pressedKeys.has(move.key);
    }
    if (move.requiredKeys?.length) {
      const hasRequiredKeys = move.requiredKeys.every((key) =>
        pressedKeys.has(key)
      );
      const hasDirectionalInput = move.requiredKeys.some((key) =>
        key.startsWith('Arrow')
      );
      if (hasDirectionalInput) {
        return hasRequiredKeys;
      }
    }
    if (!this.requiresPosture(move)) {
      return true;
    }
    return move.posture === GameState.playerPosture;
  }
}
