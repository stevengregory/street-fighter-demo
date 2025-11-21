import { GameState } from './game-state';
import { moves } from './moves';
import type { MoveConfig } from '../types/move-config';

function requiresPosture(move: MoveConfig): boolean {
  return move.posture !== undefined;
}

export function isMoveAllowed(
  move: MoveConfig,
  pressedKeys: Set<string>,
): boolean {
  if (move.requiredKeys === false) {
    return pressedKeys.has(move.key);
  }
  if (move.requiredKeys?.length) {
    const hasRequiredKeys = move.requiredKeys.every((key) =>
      pressedKeys.has(key),
    );
    const hasDirectionalInput = move.requiredKeys.some((key) =>
      key.startsWith('Arrow'),
    );
    if (hasDirectionalInput) {
      return hasRequiredKeys;
    }
  }
  if (!requiresPosture(move)) {
    return true;
  }
  return move.posture === GameState.playerPosture;
}

export function onMoveKey(key: string, pressedKeys: Set<string>): void {
  const possibleMoves = moves.filter((move: MoveConfig) => move.key === key);
  for (const move of possibleMoves) {
    if (isMoveAllowed(move, pressedKeys)) {
      move.doMove();
      return;
    }
  }
}
