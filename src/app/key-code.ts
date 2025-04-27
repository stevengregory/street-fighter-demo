import { ComboManager } from './combo-manager';

const pressedKeys = new Set<string>();

export default (function getMove() {
  onkeydown = (e) => {
    pressedKeys.add(e.key);
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      ComboManager.onMoveKey(e.key, pressedKeys);
    }
  };

  onkeyup = (e) => {
    pressedKeys.delete(e.key);
    if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      ComboManager.onMoveKey(e.key, pressedKeys);
    }
  };
})();
