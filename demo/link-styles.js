/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css} from 'lit-element';
import { linkStyle } from '../shared-styles.js';

class linkStyles extends LitElement {
  static get styles() {
    return [
      linkStyle,
      css`
        :host{
          display: inline-block;
          margin: 0px 24px;
          --primary-color: #3f51b5;
          --accent-color: #50cA00;
        }
        a {
          margin-left: 12px;
        }
        a.customColor {
          --dw-link-text-color: lightblue;
        }
      `
    ];
  }

  render() {
    return html`
      <h4>Normal link</h4>
      <a href="https://www.google.com/">Normal</a>

      <h4>Link with primary color</h4>
      <a href="https://www.google.com/" class="primary">primary</a>

      <h4>Link with accent color</h4>
      <a href="https://www.google.com/" class="accent">accent</a>

      <h4>Link with custom color</h4>
      <a class="customColor" href="https://www.google.com/">custom</a>

      <h4>Link with underline and accent color</h4>
      <a href="https://www.google.com/" class="underline">underline</a>

      <h4>Link with underline and primary color</h4>
      <a href="https://www.google.com/" class="underline primary">underline</a>

      <h4>Link with underline and custom color</h4>
      <a href="https://www.google.com/" class="underline customColor">underline</a>
    `;
  }
}

window.customElements.define('link-styles', linkStyles);