import { GameState } from './game-state';
import { moves } from './moves';

let lastKeyTime = 0;

export class ComboManager {
  static onMoveKey(key: string): void {
    const now = Date.now();
    const move = ComboManager.findMoveByKeyAndPosture(key);
    move?.doMove();
    lastKeyTime = now;
  }

  static findMoveByKeyAndPosture(key: string) {
    const posture = GameState.playerPosture;

    return moves.find(
      (m) => m.key === key && (m.posture === undefined || m.posture === posture)
    );
  }
}
