import { onMoveKey } from './combo-manager';

const pressedKeys = new Set<string>();

export default (function getMove() {
  document.addEventListener('keydown', (e) => {
    pressedKeys.add(e.key);
    onMoveKey(e.key, pressedKeys);
  });
  document.addEventListener('keyup', (e) => {
    pressedKeys.delete(e.key);
  });
})();
