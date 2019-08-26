import { css } from 'lit-element';

export const ThemeStyle = css`
:host {
  /**Light theme values - START */
  --mdc-theme-primary-on-light: #6200ee;
  --mdc-theme-secondary-on-light: #018786;
  --mdc-theme-background-on-light: #fff;
  --mdc-theme-surface-on-light: #fff;
  --mdc-theme-error-on-light: #b00020;
  --mdc-theme-on-primary-on-light: #fff;
  --mdc-theme-on-secondary-on-light: #fff;
  --mdc-theme-on-surface-on-light: #000;
  --mdc-theme-on-error-on-light: #fff;

  --mdc-theme-text-primary-on-light: rgba(0, 0, 0, 0.87);
  --mdc-theme-text-secondary-on-light: rgba(0, 0, 0, 0.6);
  --mdc-theme-text-hint-on-light: rgba(0, 0, 0, 0.38);
  --mdc-theme-text-disabled-on-light: rgba(0, 0, 0, 0.38);

  --mdc-theme-divider-on-light: rgba(0, 0, 0, 0.12);

  --dw-icon-color-active-on-light: var(--mdc-theme-text-primary-on-light);
  --dw-icon-color-on-light: var(--mdc-theme-text-secondary-on-light);
  --dw-icon-color-disabled-on-light: var(--mdc-theme-text-disabled-on-light);
  /** Light theme values - END */

  /** Dark theme values - START */
  --mdc-theme-primary-on-dark: #BB86FC;
  --mdc-theme-secondary-on-dark: #03DAC6;
  --mdc-theme-background-on-dark: #121212;
  --mdc-theme-surface-on-dark: #121212;
  --mdc-theme-error-on-dark: #CF6679;
  --mdc-theme-on-primary-on-dark: #000;
  --mdc-theme-on-secondary-on-dark: #000;
  --mdc-theme-on-surface-on-dark: #fff;
  --mdc-theme-on-error-on-dark: #000;

  --mdc-theme-text-primary-on-dark: rgba(255, 255, 255, 0.87);
  --mdc-theme-text-secondary-on-dark: rgba(255, 255, 255, 0.6);
  --mdc-theme-text-hint-on-dark: rgba(255, 255, 255, 0.38);
  --mdc-theme-text-disabled-on-dark: rgba(255, 255, 255, 0.38);

  --mdc-theme-divider-on-dark: rgba(255, 255, 255, 0.12);

  --dw-icon-color-active-on-dark: var(--mdc-theme-text-primary-on-dark);
  --dw-icon-color-on-dark: var(--mdc-theme-text-secondary-on-dark);
  --dw-icon-color-disabled-on-dark: var(--mdc-theme-text-disabled-on-dark);
  /** Dark theme values - END */


  /** Actual CSS Properties to be used by WebComponents - START */
  /** Defaulting to light theme */
  --mdc-theme-primary: var(--mdc-theme-primary-on-light);
  --mdc-theme-secondary: var(--mdc-theme-secondary-on-light);
  --mdc-theme-background: var(--mdc-theme-background-on-light);
  --mdc-theme-surface: var(--mdc-theme-surface-on-light);
  --mdc-theme-error: var(--mdc-theme-error-on-light);
  --mdc-theme-on-primary: var(--mdc-theme-on-primary-on-light);
  --mdc-theme-on-secondary: var(--mdc-theme-on-secondary-on-light);
  --mdc-theme-on-error: var(--mdc-theme-on-error-on-light);
  
  /** This actually never used direclty, instead --mdc-theme-text-* will be used. */
  --mdc-theme-on-surface: var(--mdc-theme-on-surface-on-light);
  


  --mdc-theme-text-primary: var(--mdc-theme-text-primary-on-light);
  --mdc-theme-text-secondary: var(--mdc-theme-text-secondary-on-light);
  --mdc-theme-text-hint: var(--mdc-theme-text-hint-on-light);
  --mdc-theme-text-disabled: var(--mdc-theme-text-disabled-on-light);

  --mdc-theme-divider: var(--mdc-theme-divider-on-light);

  --dw-icon-color-active: var(--dw-icon-color-active-on-light);
  --dw-icon-color: var(--dw-icon-color-on-light);
  --dw-icon-color-disabled: var(--dw-icon-color-disabled-on-light);

  /** Actual CSS Properties to be used by WebComponents - END */

  background-color: var(--mdc-theme-background-on-light);
}

:host[dark-theme] {
  --mdc-theme-primary: var(--mdc-theme-primary-on-dark);
  --mdc-theme-secondary: var(--mdc-theme-secondary-on-dark);
  --mdc-theme-background: var(--mdc-theme-background-on-dark);
  --mdc-theme-surface: var(--mdc-theme-surface-on-dark);
  --mdc-theme-error: var(--mdc-theme-error-on-dark);
  --mdc-theme-on-primary: var(--mdc-theme-on-primary-on-dark);
  --mdc-theme-on-secondary: var(--mdc-theme-on-secondary-on-dark);
  --mdc-theme-on-surface: var(--mdc-theme-on-surface-on-dark);
  --mdc-theme-on-error: var(--mdc-theme-on-error-on-dark);


  --mdc-theme-text-primary: var(--mdc-theme-text-primary-on-dark);
  --mdc-theme-text-secondary: var(--mdc-theme-text-secondary-on-dark);
  --mdc-theme-text-hint: var(--mdc-theme-text-hint-on-dark);
  --mdc-theme-text-disabled: var(--mdc-theme-text-disabled-on-dark);

  --mdc-theme-divider: var(--mdc-theme-divider-on-dark);

  --dw-icon-color-active: var(--dw-icon-color-active-on-dark);
  --dw-icon-color: var(--dw-icon-color-on-dark);
  --dw-icon-color-disabled: var(--dw-icon-color-disabled-on-dark);

  background-color: var(--mdc-theme-background-on-dark);
}

`;