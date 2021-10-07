import { css } from 'lit-element';

export const ThemeStyle = css`
:host {
  --mdc-theme-primary: #02AFCD;
  --mdc-theme-secondary: #FF4080;
  --mdc-theme-background: #FFFFFF;
  --mdc-theme-surface: #FFFFFF;
  --mdc-theme-error: #B00020;
  --mdc-theme-on-primary: #FFFFFF;
  --mdc-theme-on-secondary: #FFFFFF;
  --mdc-theme-on-surface: #000000;
  --mdc-theme-on-error: #FFFFFF;
  --mdc-theme-text-primary-on-background: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-background: rgba(0, 0, 0, 0.54);
  --mdc-theme-text-hint-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-background: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.6);
  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-primary-on-dark: #FFFFFF;
  --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.74);
  --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.5);
  --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-icon-on-dark: rgba(255, 255, 255, 0.5);

  --dw-icon-color-active: var(--mdc-theme-text-primary-on-light);
  --dw-icon-color: var(--mdc-theme-text-secondary-on-light);
  --dw-icon-color-disabled: var(--mdc-theme-text-disabled-on-light);
}

:host([dark-theme]) {
  --mdc-theme-primary: #82DFF3;
  --mdc-theme-secondary: #FF92B6;
  --mdc-theme-background: #121212;
  --mdc-theme-surface: #121212;
  --mdc-theme-error: #CF6679;
  --mdc-theme-on-primary: #000000;
  --mdc-theme-on-secondary: #000000;
  --mdc-theme-on-surface: #FFFFFF;
  --mdc-theme-on-error: #000000;
  --mdc-theme-text-primary-on-background: rgba(255, 255, 255, 0.87);
  --mdc-theme-text-secondary-on-background: rgba(255, 255, 255, 0.54);
  --mdc-theme-text-hint-on-background: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-disabled-on-background: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-icon-on-background: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-primary-on-light: rgba(255, 255, 255, 0.87);
  --mdc-theme-text-secondary-on-light: rgba(255, 255, 255, 0.60);
  --mdc-theme-text-hint-on-light: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-disabled-on-light: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-icon-on-light: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-primary-on-dark: #000000;
  --mdc-theme-text-secondary-on-dark: rgba(0, 0, 0, 0.74);
  --mdc-theme-text-hint-on-dark: rgba(0, 0, 0, 0.5);
  --mdc-theme-text-disabled-on-dark: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-icon-on-dark: rgba(0, 0, 0, 0.5);

  --dw-icon-color-active: var(--mdc-theme-text-primary-on-light);
  --dw-icon-color: var(--mdc-theme-text-secondary-on-light);
  --dw-icon-color-disabled: var(--mdc-theme-text-disabled-on-light);
  
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