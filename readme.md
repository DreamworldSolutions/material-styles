# material-styles

Main aim of this library is to define Custom CSS properties for colors & Typography classes.

CSS properties should be used for themeing by custom elements developed by Dreamworld. Exact values of these CSS 
properties will be set by the app based on it's theme.

## Usage

1. Apply `ThemeStyle` to app-shell. And customize the css properties as needed. //TODO: Example
2. For other style modules (e.g. `Typography`, `Link`), app should create it's own module by extending these modules. 
Application's module should be used in other elements of the app. These style modules shouldn't be directly used. This 
way app can change/override a particular style easily in future, when needed.

### Apply ThemeStyle to app-shell
```js
import {ThemeStyle} from '@dreamworld/material-styles/theme.js';

class MyApp extends LitElement {
  static get styles() {
    return [
      ThemeStyle,
      css`
        :host {
          --mdc-theme-primary-on-light: #03A9F4;
          --mdc-theme-secondary-on-light: #CDDC39;
        }
      `
    ];
  },

  static get properties() {
    return {
      
      /**
       * A name of this element.
       */
      darkTheme: {
        type: String,
        reflect: true
      },
    }
  }
}
```
