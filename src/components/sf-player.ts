import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Config } from '../app/config';
import { EntranceManager } from '../app/entrance';
import { SoundManager } from '../app/sound-manager';

@customElement('sf-player')
export class SFPlayer extends LitElement {
  static properties = {
    name: { type: String },
  };
  declare name: string;
  private musicStarted = false;
  private entranceManager: EntranceManager;

  constructor() {
    super();
    this.name = 'dudley';
    this.entranceManager = new EntranceManager();
  }

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    this.entranceManager.setElement(this.element);
    this.entranceManager.playEntrance();
    if (Config.playBackgroundMusic) {
      window.addEventListener('keydown', () => {
        if (!this.musicStarted) {
          SoundManager.playMusicTrack('dudley-theme');
          this.musicStarted = true;
        }
      });
    }
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
