A Link shared-styles


## Usage
```html
import { linkStyle } from '@dreamworld/material-styles/shared-styles.js';

static get styles() {
	return [
		linkStyle
	];
}

<a href="https://www.google.com/">Normal</a>
```

## [Demo](https://dreamworldsolutions.github.io/material-styles/demo/index.html)

### Theme
To configure color of the link using css variable.

```css
dw-button {
	--primary-color: #3f51b5;
	--accent-color: #50cA00;
	--dw-link-text-color: lightblue;
}
```