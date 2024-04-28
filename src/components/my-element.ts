import { LitElement, html } from 'lit';
import { customElement, property, state } from "lit/decorators.js";

@customElement("my-element")
export class MyElement extends LitElement {
  @state()
  private _number = 0;

  @property()
  name: string = "hoho";

  @property()
  description?: string;

  private _increment() {
    this._number++;
  }

  protected render() {
    return html`
      <p>Attribute value: ${this.name}</p>
      <p>${this.description}</p>
      <span>${this._number}</span>
      <button @click="${this._increment}">increment</button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
