# material-styles

This is used to define custom css properties for the app colors and typography.

CSS properties should be used for themeing by custom elements developed by Dreamworld. Exact values of these CSS 
properties will be set by the app based on it's theme.

### Theme

It defines custom css properties to be used. Application can override value of that properties and can add new properties as per need.

#### Usage

It can be used directly in app-shell or you can create custom theme.

##### Custom theme
```js
import {ThemeStyle} from '@dreamworld/material-styles/theme.js';
import { css } from 'lit-element';

export const AppThemeStyle = css`
    ${ThemeStyle}

    :host {
      --mdc-theme-on-surface: #000;
    }

    :host[dark-theme] {
      --mdc-theme-on-surface: #fff;
    }
    
`;

class MyApp extends LitElement {
  static get styles() {
    return [
      AppThemeStyle,
    ];
  },

  static get properties() {
    return {
      
      /**
       * True, when application's dark mode is on
       */
      darkTheme: {
        type: String,
        reflect: true
      },
    }
  }
}
```

### Typography

It provides css properties for the material typography. Application Theme can override it's provided css properties if required.

#### Usage

```js
class MyApp extends LitElement {
  static get styles() {
    return [
      :host {
        --overline-font-size: 15px;
      }
    ];
  },
}
```

### Link (Anchor tag)

App should create it's own module by extending these modules. Application's module should be used in other elements of the app. These style modules shouldn't be directly use. This way app can change/override a particular style easily in future, when needed.

#### Usage


```js
import { linkStyle } from '@dreamworld/material-styles/link.js';

class MyApp extends LitElement {
  static get styles() {
    return [
      linkStyle,

      :host {
      }
    ];
  },

  render(){
    return html`<a href="https://www.google.com/">Go to google</a>`;
  }
}
```
