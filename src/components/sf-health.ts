import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('sf-health')
export class SFHealth extends LitElement {
  static properties = {
    playerName: { type: String },
    health: { type: Number },
  };
  declare playerName: string;
  declare health: number;

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="health">
        <progress max="100" value="${this.health}"></progress>
        <span class="player-icon"></span>
        <p>${this.playerName}</p>
      </div>
    `;
  }
}
