import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('sf-stage')
export class SFStage extends LitElement {
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <div class="logo"></div>
      <main role="main">
        <div class="health">
          <progress max="100" value="100"></progress>
          <span class="player-icon"></span>
          <p>dudley</p>
        </div>
        <sf-player></sf-player>
      </main>
    `;
  }
}
