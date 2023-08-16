import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("web-satire")
export class SatireElement extends LitElement {
  @property({ type: Boolean })
  showEmoji = true;

  @property({ type: Boolean })
  showTooltip = true;

  @property({ type: String })
  emojiCharacter = "🔥";

  @property({ type: String })
  tooltipText = "SATIRE";

  static styles = css`
    :host {
      display: var(--satire-display, inline);
      font-family: var(--satire-font-family, Arial, sans-serif);
      font-style: var(--satire-font-style, normal);
      font-weight: var(--satire-font-weight, normal);
      color: var(--satire-color, #686868);
      position: relative;
    }

    .satire-icon {
      display: var(--satire-display-icon, inline);
      margin-left: var(--satire-display-icon-left, 0.5ch);
    }

    .tooltip {
      visibility: hidden;
      font-size: 2em;
      font-weight: bold;
      -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
      color: #00ff00;
      text-align: center;
      position: absolute;
      z-index: 1;
      top: -0.5ch;
      left: 0;
      opacity: 0;
    }

    @keyframes flash {
      0%,
      100% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
    }

    :host(:hover) .tooltip {
      visibility: visible;
      opacity: 1;
      animation: flash 2s;
      animation-iteration-count: infinite;
      cursor: wait;
    }
  `;

  render() {
    return html`
      <slot></slot>${this.showEmoji
        ? html`<span class="satire-icon">${this.emojiCharacter}</span>`
        : ""}
      <div class="tooltip">SATIRE</div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "web-satire": SatireElement;
  }
}
