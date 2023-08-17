import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { default as componentCss } from "./sarcasm-element.css?inline";

const descriptionTemplate = document.createElement("template");
descriptionTemplate.innerHTML = `
<p>sarcasm - noun</p>
<ol>
  <li>harsh or bitter derision or irony.</li>
  <li>a sharply ironical taunt; sneering or cutting remark.</li>
</ol>
`;

@customElement("web-sarcasm")
class sarcasmElement extends LitElement {
  @property({ type: String })
  prefix = "";

  @property({ type: String })
  suffix = "😏";

  @property({ type: Boolean })
  showTooltip = !this.hasAttribute("hide-tooltip");

  @property({ type: String })
  toolTipText = descriptionTemplate.content;

  @property({ type: HTMLTemplateElement })
  template: HTMLTemplateElement = descriptionTemplate;

  static styles = css`
    ${unsafeCSS(componentCss)}
  `;

  render() {
    console.dir(this.template);
    return html`
      ${this.prefix
        ? html`<span class="sarcasm-prefix">${this.prefix}</span>`
        : ""}
      <slot></slot>
      ${this.suffix
        ? html`<span class="sarcasm-icon">${this.suffix}</span>`
        : ""}
      ${this.showTooltip
        ? html`<div class="tooltip">${this.template.content.cloneNode(true)}</div>`
        : ""}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "web-sarcasm": sarcasmElement;
  }
}
