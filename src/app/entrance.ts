import Action from './action';

export class EntranceManager {
  private element: HTMLElement | null;
  private entranceAction: Action;

  constructor() {
    this.element = null;
    this.entranceAction = new Action('entrance', '', false, false);
  }

  public setElement(element: HTMLElement | null): void {
    this.element = element;
  }

  public playEntrance(): void {
    if (!this.element) {
      requestAnimationFrame(() => this.playEntrance());
      return;
    }
    this.element.classList.add('entrance');
    this.element.addEventListener(
      'animationend',
      () => {
        if (this.element?.classList.contains('entrance')) {
          this.element.classList.remove('entrance');
          this.element.classList.add('stance');
        }
      },
      { once: true }
    );
    this.entranceAction.doMove();
  }
}
