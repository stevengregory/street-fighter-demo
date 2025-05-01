import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { SoundManager } from '../app/sound-manager';
import { Config } from '../app/config';
import Action from '../app/action';

@customElement('sf-player')
export class SFPlayer extends LitElement {
  static properties = {
    name: { type: String }
  };
  declare name: string;
  private musicStarted = false;
  private entranceAction: Action;

  constructor() {
    super();
    this.name = 'dudley';
    this.entranceAction = new Action('entrance', '', false, false);
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    this.playEntrance();
  }

  firstUpdated() {
    if (Config.playBackgroundMusic) {
      window.addEventListener('keydown', () => {
        if (!this.musicStarted) {
          SoundManager.playMusicTrack('dudley-theme');
          this.musicStarted = true;
        }
      });
    }
  }

  private playEntrance() {
    const element = this.element;
    if (!element) {
      requestAnimationFrame(() => this.playEntrance());
      return;
    }
    element.addEventListener(
      'animationend',
      () => {
        if (element.classList.contains('entrance')) {
          element.classList.remove('entrance');
          element.classList.add('stance');
        }
      },
      { once: true }
    );
    this.entranceAction.doMove();
  }

  render() {
    return html`
      <div class="character">
        <span></span>
      </div>
    `;
  }

  get element(): HTMLElement | null {
    return this.querySelector('.character span');
  }

  get playerName(): string {
    return this.name;
  }
}
