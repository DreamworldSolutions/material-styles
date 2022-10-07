import { css } from '@dreamworld/pwa-helpers/lit.js';

export const ThemeStyle = css`
  :host {
    --mdc-theme-primary: #02afcd;
    --mdc-theme-secondary: #ff4080;
    --mdc-theme-background: #ffffff;
    --mdc-theme-surface: #ffffff;
    --mdc-theme-error: #b00020;
    --mdc-theme-on-primary: #ffffff;
    --mdc-theme-on-secondary: #ffffff;
    --mdc-theme-on-surface: #000000;
    --mdc-theme-on-error: #ffffff;
    --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
    --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.6);
    --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-primary-on-surface: rgba(0, 0, 0, 0.87);
    --mdc-theme-text-secondary-on-surface: rgba(0, 0, 0, 0.6);
    --mdc-theme-text-hint-on-surface: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-disabled-on-surface: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-surface: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-primary-on-primary: #ffffff;
    --mdc-theme-text-secondary-on-primary: rgba(255, 255, 255, 0.74);
    --mdc-theme-text-hint-on-primary: rgba(255, 255, 255, 0.5);
    --mdc-theme-text-disabled-on-primary: rgba(255, 255, 255, 0.38);
    --mdc-theme-text-icon-on-primary: rgba(255, 255, 255, 0.5);
    --mdc-theme-primary-invert-color: #82dff3;

    --dw-icon-color-active: var(--mdc-theme-text-primary-on-surface);
    --dw-icon-color: var(--mdc-theme-text-secondary-on-surface);
    --dw-icon-color-disabled: var(--mdc-theme-text-disabled-on-surface);
    --dw-tooltip-background-color: #666666;
    --dw-surface-invert-color: var(--mdc-theme-text-primary-on-background);
    --dw-on-surface-invert-color: rgba(255, 255, 255, 0.87);

    /* surface overlay color*/
    --mdc-theme-on-surface-overlay-opacity-hover: 0.04;
    --mdc-theme-on-primary-overlay-opacity-hover: 0.08;
    --mdc-theme-on-secondary-overlay-opacity-hover: 0.08;
    --mdc-theme-on-error-overlay-opacity-hover: 0.08;

    --mdc-theme-on-surface-overlay-opacity-focus: 0.12;
    --mdc-theme-on-primary-overlay-opacity-focus: 0.24;
    --mdc-theme-on-secondary-overlay-opacity-focus: 0.24;
    --mdc-theme-on-error-overlay-opacity-focus: 0.24;

    --mdc-theme-on-surface-overlay-opacity-selected: 0.08;
    --mdc-theme-on-primary-overlay-opacity-selected: 0.16;
    --mdc-theme-on-secondary-overlay-opacity-selected: 0.16;
    --mdc-theme-on-error-overlay-opacity-selected: 0.16;

    --mdc-theme-on-surface-overlay-opacity-activated: 0.12;
    --mdc-theme-on-primary-overlay-opacity-activated: 0.24;
    --mdc-theme-on-secondary-overlay-opacity-activated: 0.24;
    --mdc-theme-on-error-overlay-opacity-activated: 0.24;

    --mdc-ripple-press-opacity: 0.16;
  }

  :host([dark-theme]) {
    --mdc-theme-primary: #82dff3;
    --mdc-theme-secondary: #ff92b6;
    --mdc-theme-background: #121212;
    --mdc-theme-surface: #121212;
    --mdc-theme-error: #cf6679;
    --mdc-theme-on-primary: #000000;
    --mdc-theme-on-secondary: #000000;
    --mdc-theme-on-surface: #ffffff;
    --mdc-theme-on-error: #000000;
    --mdc-theme-text-primary-on-background: rgba(255, 255, 255, 0.87);
    --mdc-theme-text-secondary-on-background: rgba(255, 255, 255, 0.6);
    --mdc-theme-text-hint-on-background: rgba(255, 255, 255, 0.38);
    --mdc-theme-text-disabled-on-background: rgba(255, 255, 255, 0.38);
    --mdc-theme-text-icon-on-background: rgba(255, 255, 255, 0.38);
    --mdc-theme-text-primary-on-surface: rgba(255, 255, 255, 0.87);
    --mdc-theme-text-secondary-on-surface: rgba(255, 255, 255, 0.6);
    --mdc-theme-text-hint-on-surface: rgba(255, 255, 255, 0.38);
    --mdc-theme-text-disabled-on-surface: rgba(255, 255, 255, 0.38);
    --mdc-theme-text-icon-on-surface: rgba(255, 255, 255, 0.38);
    --mdc-theme-text-primary-on-primary: #000000;
    --mdc-theme-text-secondary-on-primary: rgba(0, 0, 0, 0.74);
    --mdc-theme-text-hint-on-primary: rgba(0, 0, 0, 0.5);
    --mdc-theme-text-disabled-on-primary: rgba(0, 0, 0, 0.38);
    --mdc-theme-text-icon-on-primary: rgba(0, 0, 0, 0.5);
    --mdc-theme-primary-invert-color: #02afcd;

    --dw-icon-color-active: var(--mdc-theme-text-primary-on-surface);
    --dw-icon-color: var(--mdc-theme-text-secondary-on-surface);
    --dw-icon-color-disabled: var(--mdc-theme-text-disabled-on-surface);
    --dw-tooltip-background-color: #e4e4e4;
    --dw-surface-invert-color: var(--mdc-theme-text-primary-on-background);
    --dw-on-surface-invert-color: rgba(0, 0, 0, 0.87);

    /* surface overlay properties */
    --dw-surface-overlay-color: var(--mdc-theme-on-surface);
    --dw-surface-overlay-opacitiy-elevation-1: 0.05;
    --dw-surface-overlay-opacitiy-elevation-2: 0.07;
    --dw-surface-overlay-opacitiy-elevation-3: 0.08;
    --dw-surface-overlay-opacitiy-elevation-4: 0.09;
    --dw-surface-overlay-opacitiy-elevation-6: 0.11;
    --dw-surface-overlay-opacitiy-elevation-8: 0.12;
    --dw-surface-overlay-opacitiy-elevation-12: 0.14;
    --dw-surface-overlay-opacitiy-elevation-16: 0.15;
    --dw-surface-overlay-opacitiy-elevation-24: 0.16;
  }
`;
