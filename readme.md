# @dreamworld/material-styles

A CSS custom properties library providing Material Design theming tokens, color palettes, typography scales, elevation shadows, and link styles for LitElement-based web components.

---

## 1. User Guide

### Installation & Setup

```bash
yarn add @dreamworld/material-styles
```

This package is published as an ES Module (`"type": "module"`). It requires `@dreamworld/pwa-helpers` as a direct dependency (installed automatically).

---

### Basic Usage

#### `theme.js` — Theme Tokens

Provides `ThemeStyle`, a `css` tagged template literal that sets all Material Design theme tokens on `:host` for both light and dark themes.

```js
import { ThemeStyle } from '@dreamworld/material-styles/theme.js';
import { LitElement, css } from 'lit';

class MyApp extends LitElement {
  static get styles() {
    return [ThemeStyle];
  }
}
```

Toggle dark theme by reflecting the `dark-theme` attribute on the host element:

```js
class MyApp extends LitElement {
  static get properties() {
    return {
      darkTheme: { type: Boolean, reflect: true, attribute: 'dark-theme' }
    };
  }
}
```

```html
<my-app dark-theme></my-app>
```

**Extending with custom overrides:**

```js
import { ThemeStyle } from '@dreamworld/material-styles/theme.js';
import { css } from 'lit';

export const AppThemeStyle = css`
  ${ThemeStyle}

  :host {
    --mdc-theme-primary: #1976d2;
  }

  :host([dark-theme]) {
    --mdc-theme-primary: #90caf9;
  }
`;
```

---

#### `color.js` — Color Palette

Provides `color`, a `css` tagged template literal defining the complete Google and Paper Material Design color palettes as CSS custom properties on `:host`.

```js
import { color } from '@dreamworld/material-styles/color.js';
import { LitElement } from 'lit';

class MyApp extends LitElement {
  static get styles() {
    return [color];
  }
}
```

Reference palette variables in your CSS:

```css
background-color: var(--paper-blue-500);
color: var(--google-grey-700);
```

---

#### `typography.js` — Typography Classes

Provides `Typography` (and its alias `typography`), which maps Material Design type scale classes and HTML heading tags to the defined styles.

```js
import { Typography } from '@dreamworld/material-styles/typography.js';
import { LitElement } from 'lit';

class MyElement extends LitElement {
  static get styles() {
    return [Typography];
  }
}
```

Use type scale in your template:

```html
<h1>Headline 1 via h1 tag</h1>
<span class="headline3">Headline 3 via class</span>
<p class="body1">Body text</p>
<span class="caption">Caption text</span>
```

---

#### `typography-literals.js` — Typography Style Fragments

Provides individual composable `css` fragments for each type scale. Import specific fragments to apply typography styles directly in component `styles` or to compose new style objects.

```js
import { headline6, body1, caption } from '@dreamworld/material-styles/typography-literals.js';
import { LitElement, css } from 'lit';

class MyElement extends LitElement {
  static get styles() {
    return [css`
      .title { ${headline6}; }
      .content { ${body1}; }
      .note { ${caption}; }
    `];
  }
}
```

---

#### `shadow.js` — Elevation Shadows

Provides `Shadow`, which defines 25 `box-shadow` values (`--mdc-elevation--z0` through `--mdc-elevation--z24`) on `:host`.

```js
import { Shadow } from '@dreamworld/material-styles/shadow.js';
import { LitElement, css } from 'lit';

class MyCard extends LitElement {
  static get styles() {
    return [Shadow, css`
      :host {
        box-shadow: var(--mdc-elevation--z4);
      }
    `];
  }
}
```

---

#### `link.js` — Anchor Tag Styles

Provides `LinkStyle`, which removes text-decoration from all `<a>` tags and colors them using theme tokens. Add the `.secondary` class to use the secondary theme color.

```js
import { LinkStyle } from '@dreamworld/material-styles/link.js';
import { LitElement, html } from 'lit';

class MyElement extends LitElement {
  static get styles() {
    return [LinkStyle];
  }

  render() {
    return html`
      <a href="/home">Primary link</a>
      <a href="/settings" class="secondary">Secondary link</a>
    `;
  }
}
```

> **Recommended pattern:** Create an app-level wrapper module that imports `LinkStyle` and re-exports it with any overrides. Use the wrapper throughout your components so overrides can be applied in one place.

---

### API Reference

#### `ThemeStyle` — CSS Custom Properties

All properties are set on `:host`. The `:host([dark-theme])` block overrides the values below.

| Property | Light Default | Dark Default | Description |
|---|---|---|---|
| `--mdc-theme-primary` | `#02afcd` | `#82dff3` | Primary brand color |
| `--mdc-theme-secondary` | `#ff4080` | `#ff92b6` | Secondary brand color |
| `--mdc-theme-background` | `#ffffff` | `#121212` | App background color |
| `--mdc-theme-surface` | `#ffffff` | `#121212` | Surface/card background |
| `--mdc-theme-error` | `#b00020` | `#cf6679` | Error state color |
| `--mdc-theme-on-primary` | `#ffffff` | `#000000` | Content color on primary |
| `--mdc-theme-on-secondary` | `#ffffff` | `#000000` | Content color on secondary |
| `--mdc-theme-on-surface` | `#000000` | `#ffffff` | Content color on surface |
| `--mdc-theme-on-error` | `#ffffff` | `#000000` | Content color on error |
| `--mdc-theme-text-primary-on-background` | `rgba(0,0,0,0.87)` | `rgba(255,255,255,0.87)` | Primary text on background |
| `--mdc-theme-text-secondary-on-background` | `rgba(0,0,0,0.6)` | `rgba(255,255,255,0.6)` | Secondary text on background |
| `--mdc-theme-text-hint-on-background` | `rgba(0,0,0,0.38)` | `rgba(255,255,255,0.38)` | Hint text on background |
| `--mdc-theme-text-disabled-on-background` | `rgba(0,0,0,0.38)` | `rgba(255,255,255,0.38)` | Disabled text on background |
| `--mdc-theme-text-icon-on-background` | `rgba(0,0,0,0.38)` | `rgba(255,255,255,0.38)` | Icon color on background |
| `--mdc-theme-text-primary-on-surface` | `rgba(0,0,0,0.87)` | `rgba(255,255,255,0.87)` | Primary text on surface |
| `--mdc-theme-text-secondary-on-surface` | `rgba(0,0,0,0.6)` | `rgba(255,255,255,0.6)` | Secondary text on surface |
| `--mdc-theme-text-hint-on-surface` | `rgba(0,0,0,0.38)` | `rgba(255,255,255,0.38)` | Hint text on surface |
| `--mdc-theme-text-disabled-on-surface` | `rgba(0,0,0,0.38)` | `rgba(255,255,255,0.38)` | Disabled text on surface |
| `--mdc-theme-text-icon-on-surface` | `rgba(0,0,0,0.38)` | `rgba(255,255,255,0.38)` | Icon color on surface |
| `--mdc-theme-text-primary-on-primary` | `#ffffff` | `#000000` | Primary text on primary bg |
| `--mdc-theme-text-secondary-on-primary` | `rgba(255,255,255,0.74)` | `rgba(0,0,0,0.74)` | Secondary text on primary bg |
| `--mdc-theme-text-hint-on-primary` | `rgba(255,255,255,0.5)` | `rgba(0,0,0,0.5)` | Hint text on primary bg |
| `--mdc-theme-text-disabled-on-primary` | `rgba(255,255,255,0.38)` | `rgba(0,0,0,0.38)` | Disabled text on primary bg |
| `--mdc-theme-text-icon-on-primary` | `rgba(255,255,255,0.5)` | `rgba(0,0,0,0.5)` | Icon color on primary bg |
| `--mdc-theme-text-warning` | `#FFA726` | `#FFCD80` | Warning text/icon color |
| `--mdc-theme-primary-invert-color` | `#82dff3` | `#02afcd` | Inverted primary color |
| `--mdc-theme-divider-color` | `rgba(0,0,0,0.12)` | `rgba(255,255,255,0.12)` | Divider/separator color |
| `--dw-icon-color-active` | `var(--mdc-theme-text-primary-on-surface)` | same | Active icon color |
| `--dw-icon-color` | `var(--mdc-theme-text-secondary-on-surface)` | same | Default icon color |
| `--dw-icon-color-disabled` | `var(--mdc-theme-text-disabled-on-surface)` | same | Disabled icon color |
| `--dw-tooltip-background-color` | `#666666` | `#e4e4e4` | Tooltip background |
| `--dw-surface-invert-color` | `var(--mdc-theme-text-primary-on-background)` | same | Inverted surface text color |
| `--dw-on-surface-invert-color` | `rgba(255,255,255,0.87)` | `rgba(0,0,0,0.87)` | Content on inverted surface |

**Surface overlay opacity properties (light theme, on `:host`):**

| Property | Hover | Focus | Selected | Activated |
|---|---|---|---|---|
| `--mdc-theme-on-surface-overlay-opacity-*` | `0.04` | `0.12` | `0.08` | `0.08` |
| `--mdc-theme-on-primary-overlay-opacity-*` | `0.08` | `0.24` | `0.16` | `0.24` |
| `--mdc-theme-on-secondary-overlay-opacity-*` | `0.08` | `0.24` | `0.16` | `0.24` |
| `--mdc-theme-on-error-overlay-opacity-*` | `0.08` | `0.24` | `0.16` | `0.24` |

`--mdc-ripple-press-opacity`: `0.16`

**Dark theme surface overlay properties (on `:host([dark-theme])`):**

| Property | Value | Description |
|---|---|---|
| `--dw-surface-overlay-color` | `var(--mdc-theme-on-surface)` | Overlay tint color |
| `--dw-surface-overlay-opacitiy-elevation-1` | `0.05` | Elevation 1 overlay opacity |
| `--dw-surface-overlay-opacitiy-elevation-2` | `0.07` | Elevation 2 overlay opacity |
| `--dw-surface-overlay-opacitiy-elevation-3` | `0.08` | Elevation 3 overlay opacity |
| `--dw-surface-overlay-opacitiy-elevation-4` | `0.09` | Elevation 4 overlay opacity |
| `--dw-surface-overlay-opacitiy-elevation-6` | `0.11` | Elevation 6 overlay opacity |
| `--dw-surface-overlay-opacitiy-elevation-8` | `0.12` | Elevation 8 overlay opacity |
| `--dw-surface-overlay-opacitiy-elevation-12` | `0.14` | Elevation 12 overlay opacity |
| `--dw-surface-overlay-opacitiy-elevation-16` | `0.15` | Elevation 16 overlay opacity |
| `--dw-surface-overlay-opacitiy-elevation-24` | `0.16` | Elevation 24 overlay opacity |

---

#### `Shadow` — Elevation Variables

All 25 elevation levels are set on `:host` as three-layer `box-shadow` values.

| Property | Description |
|---|---|
| `--mdc-elevation--z0` | No elevation (0dp) |
| `--mdc-elevation--z1` | 1dp elevation |
| `--mdc-elevation--z2` | 2dp elevation |
| `--mdc-elevation--z3` | 3dp elevation |
| `--mdc-elevation--z4` | 4dp elevation |
| `--mdc-elevation--z5` | 5dp elevation |
| `--mdc-elevation--z6` | 6dp elevation |
| `--mdc-elevation--z7` | 7dp elevation |
| `--mdc-elevation--z8` | 8dp elevation |
| `--mdc-elevation--z9` | 9dp elevation |
| `--mdc-elevation--z10` | 10dp elevation |
| `--mdc-elevation--z11` | 11dp elevation |
| `--mdc-elevation--z12` | 12dp elevation |
| `--mdc-elevation--z13` | 13dp elevation |
| `--mdc-elevation--z14` | 14dp elevation |
| `--mdc-elevation--z15` | 15dp elevation |
| `--mdc-elevation--z16` | 16dp elevation |
| `--mdc-elevation--z17` | 17dp elevation |
| `--mdc-elevation--z18` | 18dp elevation |
| `--mdc-elevation--z19` | 19dp elevation |
| `--mdc-elevation--z20` | 20dp elevation |
| `--mdc-elevation--z21` | 21dp elevation |
| `--mdc-elevation--z22` | 22dp elevation |
| `--mdc-elevation--z23` | 23dp elevation |
| `--mdc-elevation--z24` | 24dp elevation (highest) |

---

#### `Typography` / `typography` — CSS Class Mappings

`Typography` and `typography` are identical exports (aliases). The following selectors receive type-scale styles:

| Selector(s) | Scale |
|---|---|
| `h1`, `.headline1` | Headline 1 |
| `h2`, `.headline2` | Headline 2 |
| `h3`, `.headline3` | Headline 3 |
| `h4`, `.headline4` | Headline 4 |
| `h5`, `.headline5` | Headline 5 |
| `h6`, `.headline6` | Headline 6 |
| `.subtitle1` | Subtitle 1 |
| `.subtitle2` | Subtitle 2 |
| `.body1` | Body 1 |
| `.body2` | Body 2 |
| `.button` | Button |
| `.caption` | Caption |
| `.overline` | Overline |

---

#### `typography-literals.js` — Named Exports

Each export is a `CSSResult` fragment intended for interpolation.

| Export | Type Scale | Font Size (default) | Line Height (default) | Font Weight (default) |
|---|---|---|---|---|
| `fontStyle` | — | — | — | — |
| `textStyle1` | — | — | — | — |
| `textStyle2` | — | — | — | — |
| `headline1` | Headline 1 | `6rem` | `6rem` | `300` |
| `headline2` | Headline 2 | `3.75rem` | `3.75rem` | `300` |
| `headline3` | Headline 3 | `3rem` | `3.125rem` | `400` |
| `headline4` | Headline 4 | `2.125rem` | `2.5rem` | `400` |
| `headline5` | Headline 5 | `1.5rem` | `2rem` | `400` |
| `headline6` | Headline 6 | `1.25rem` | `2rem` | `500` |
| `subtitle1` | Subtitle 1 | `1rem` | `1.75rem` | `400` |
| `subtitle2` | Subtitle 2 | `0.875rem` | `1.375rem` | `500` |
| `body1` | Body 1 | `1rem` | `1.5rem` | `400` |
| `body2` | Body 2 | `0.875rem` | `1.25rem` | `400` |
| `button` | Button | `0.875rem` | `2.25rem` | `500` |
| `caption` | Caption | `0.75rem` | `1.25rem` | `400` |
| `overline` | Overline | `0.75rem` | `2rem` | `500` |

`fontStyle` sets `font-family: var(--font-family, Roboto, sans-serif)` and font smoothing.
`textStyle1` inherits `text-decoration` and `text-transform`.
`textStyle2` sets `text-decoration: none` and `text-transform: uppercase`.

**Per-scale CSS custom properties** (all typography fragments support overrides via CSS custom properties):

Each scale exposes the following overrideable properties (replace `{scale}` with the scale name, e.g. `headline1`, `body2`, etc.):

| Property | Description |
|---|---|
| `--{scale}-font-size` | Font size |
| `--{scale}-line-height` | Line height |
| `--{scale}-font-weight` | Font weight |
| `--{scale}-letter-spacing` | Letter spacing |

`subtitle1` additionally exposes `--subtitle1-text-transform`.

`--font-family` overrides the font family globally across all type scales.

```css
/* Example: override overline font size */
:host {
  --overline-font-size: 10px;
  --font-family: 'Inter', sans-serif;
}
```

---

#### `color.js` — Color Palette Variables

All variables are set on `:host`. Two palettes are provided:

**Google palette** — 4 shades (100/300/500/700) for 5 hues:

Pattern: `--google-{hue}-{shade}`

| Hue | Shades |
|---|---|
| `red` | 100, 300, 500, 700 |
| `blue` | 100, 300, 500, 700 |
| `green` | 100, 300, 500, 700 |
| `yellow` | 100, 300, 500, 700 |
| `grey` | 100, 300, 500, 700 |

**Paper palette** — 10 numeric shades (50–900) + 4 accent shades (a100/a200/a400/a700) for most hues:

Pattern: `--paper-{hue}-{shade}`

| Hue | Numeric Shades | Accent Shades |
|---|---|---|
| `red` | 50–900 | a100, a200, a400, a700 |
| `pink` | 50–900 | a100, a200, a400, a700 |
| `purple` | 50–900 | a100, a200, a400, a700 |
| `deep-purple` | 50–900 | a100, a200, a400, a700 |
| `indigo` | 50–900 | a100, a200, a400, a700 |
| `blue` | 50–900 | a100, a200, a400, a700 |
| `light-blue` | 50–900 | a100, a200, a400, a700 |
| `cyan` | 50–900 | a100, a200, a400, a700 |
| `teal` | 50–900 | a100, a200, a400, a700 |
| `green` | 50–900 | a100, a200, a400, a700 |
| `light-green` | 50–900 | a100, a200, a400, a700 |
| `lime` | 50–900 | a100, a200, a400, a700 |
| `yellow` | 50–900 | a100, a200, a400, a700 |
| `amber` | 50–900 | a100, a200, a400, a700 |
| `orange` | 50–900 | a100, a200, a400, a700 |
| `deep-orange` | 50–900 | a100, a200, a400, a700 |
| `brown` | 50–900 | — |
| `grey` | 50–900 | — |
| `blue-grey` | 50–900 | — |

---

#### `LinkStyle` — CSS Properties Consumed

`LinkStyle` does not define new CSS custom properties. It consumes:

| Property | Source | Used For |
|---|---|---|
| `--mdc-theme-primary` | `ThemeStyle` | Default `<a>` color |
| `--mdc-theme-secondary` | `ThemeStyle` | `<a class="secondary">` color |

---

### Advanced Usage

#### Dark Theme Toggle

Dark theme activates via the `dark-theme` attribute on the host element, matching the `:host([dark-theme])` CSS selector in `ThemeStyle`. Reflect a boolean property to attribute to enable reactive toggling:

```js
static get properties() {
  return {
    darkTheme: { type: Boolean, reflect: true, attribute: 'dark-theme' }
  };
}
```

#### App-Level Theme Extension

The recommended pattern is to create an app-level style module that wraps library exports. This avoids coupling child components to library import paths, and allows future override consolidation:

```js
// app-theme.js
import { ThemeStyle } from '@dreamworld/material-styles/theme.js';
import { css } from 'lit';

export const AppThemeStyle = css`
  ${ThemeStyle}
  :host {
    --mdc-theme-primary: #1565c0;
    --mdc-theme-secondary: #e91e63;
  }
  :host([dark-theme]) {
    --mdc-theme-primary: #90caf9;
    --mdc-theme-secondary: #f48fb1;
  }
`;
```

The same pattern applies to `LinkStyle` — wrap it in an app-level module so link appearance can be overridden centrally.

---

## 2. Developer Guide / Architecture

### Architecture Overview

**Design Pattern: CSS Custom Properties as Design Tokens**

All style values are exposed as CSS custom properties (variables). Components consume these variables rather than hard-coded values, enabling runtime theming via a single `:host` scope boundary — no JavaScript re-render is needed to switch themes.

**Pattern: LitElement `css` Tagged Template Literal Composition**

Each module uses `@dreamworld/pwa-helpers/lit.js`'s `css` helper (a re-export of the LitElement `css` tag) to produce `CSSResult` objects. `typography-literals.js` exports atomic `CSSResult` fragments that are composed via template literal interpolation (`${fragment}`) into larger style objects. This avoids string concatenation and satisfies LitElement's CSP-safe style handling.

```
typography-literals.js       typography.js
  headline1 ─────────────►  h1, .headline1 { ${headline1} }
  body1 ──────────────────►  .body1 { ${body1} }
  fontStyle ──► (used by all scale fragments internally)
```

### Module Responsibilities

| Module | Responsibility |
|---|---|
| `theme.js` | Defines all semantic design tokens (colors, overlays, icon colors) for light and dark themes |
| `color.js` | Provides the full Material Design color palette as raw CSS variables — no semantic mapping |
| `typography.js` | Maps HTML heading tags and utility classes to type-scale styles |
| `typography-literals.js` | Exposes individual composable type-scale fragments for direct use in component styles |
| `shadow.js` | Provides the complete 25-level Material Design elevation scale as `box-shadow` values |
| `link.js` | Provides minimal anchor tag normalization using semantic theme tokens |

### Dependency

All modules depend on a single external import:

```js
import { css } from '@dreamworld/pwa-helpers/lit.js';
```

This provides the LitElement-compatible `css` template tag. No other runtime dependencies exist.

### Development

Start the local demo server (requires `@web/dev-server`):

```bash
yarn start
```

This serves `demo/index.html`, which renders a `<typography-demo>` LitElement component demonstrating all typography classes.
