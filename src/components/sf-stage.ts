import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('sf-stage')
export class SFStage extends LitElement {
  createRenderRoot() {
    return this;
  }

  private getPlayerName(): string {
    const player = this.querySelector('sf-player') as any;
    return player?.playerName ?? 'dudley';
  }

  render() {
    return html`
      <div class="logo"></div>
      <main>
        <sf-health
          playerName="${this.getPlayerName()}"
          health="100"
        ></sf-health>
        <sf-player></sf-player>
      </main>
    `;
  }
}
