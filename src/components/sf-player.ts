import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('sf-player')
export class SFPlayer extends LitElement {
  createRenderRoot() {
    return this;
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
}
