/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html } from 'lit-element';
import { typography } from '../typography';

class TypographyDemo extends LitElement {
  static get styles() {
    return [
      typography
    ];
  }
  render() {
    return html`
      <div class="headline1">H1</div>
      <div class="headline2">H2</div>
      <div class="headline3">H3</div>
      <div class="headline4">H4</div>
      <div class="headline5">H5</div>
      <div class="headline6">H6</div>
      <div class="subtitle1">Subtitle 1</div>
      <div class="subtitle2">Subtitle 2</div>
      <div class="body1">Body 1</div>
      <div class="body2">Body 2</div>
      <div class="button">Button</div>
      <div class="caption">Caption</div>
      <div class="overline">Overline</div>
    `;
  }
}

window.customElements.define('typography-demo', TypographyDemo);
