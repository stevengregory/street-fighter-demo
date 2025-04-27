import { ComboManager } from './combo-manager';

export default (function getMove() {
  onkeydown = (e) => {
    if (
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight'
    ) {
      ComboManager.onMoveKey(e.key);
    }
  };

  onkeyup = (e) => {
    if (
      e.key !== 'ArrowUp' &&
      e.key !== 'ArrowDown' &&
      e.key !== 'ArrowLeft' &&
      e.key !== 'ArrowRight'
    ) {
      ComboManager.onMoveKey(e.key);
    }
  };
})();
