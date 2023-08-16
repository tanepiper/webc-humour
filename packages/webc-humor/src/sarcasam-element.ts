import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { default as componentCss } from "./sarcasam-element.css?inline";

const descriptionTemplate = document.createElement("template");
descriptionTemplate.innerHTML = `
<p>sarcasam - noun</p>
<ol>
  <li>harsh or bitter derision or irony.</li>
  <li>a sharply ironical taunt; sneering or cutting remark.</li>
</ol>
`;

@customElement("web-sarcasam")
class SarcasamElement extends LitElement {
  @property({ type: String })
  prefix = "";

  @property({ type: String })
  suffix = "😏";

  @property({ type: Boolean })
  showTooltip = !this.hasAttribute("hide-tooltip");

  @property({ type: String })
  toolTipText = descriptionTemplate.content;

  static styles = css`
    ${unsafeCSS(componentCss)}
  `;

  render() {
    return html`
      ${this.prefix
        ? html`<span class="sarcasam-prefix">${this.prefix}</span>`
        : ""}
      <slot></slot>
      ${this.suffix
        ? html`<span class="sarcasam-icon">${this.suffix}</span>`
        : ""}
      ${this.showTooltip
        ? html`<div class="tooltip">${this.toolTipText}</div>`
        : ""}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "web-sarcasam": SarcasamElement;
  }
}
