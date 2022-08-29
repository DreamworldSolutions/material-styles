import { css } from "lit-element";

export const fontStyle = css`
  font-family: var(--font-family, Roboto, sans-serif);
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

export const textStyle1 = css`
  text-decoration: inherit;
  text-transform: inherit;
`;

export const textStyle2 = css`
  text-decoration: none;
  text-transform: uppercase;
`;

export const headline1 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--headline1-font-size, 6rem);
  line-height: var(--headline1-line-height, 6rem);
  font-weight: var(--headline1-font-weight, 300);
  letter-spacing: var(--headline1-letter-spacing, -0.015625em);
`;

export const headline2 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--headline2-font-size, 3.75rem);
  line-height: var(--headline2-line-height, 3.75rem);
  font-weight: var(--headline2-font-weight, 300);
  letter-spacing: var(--headline2-letter-spacing, -0.0083333333em);
`;

export const headline3 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--headline3-font-size, 3rem);
  line-height: var(--headline3-line-height, 3.125rem);
  font-weight: var(--headline3-font-weight, 400);
`;

export const headline4 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--headline4-font-size, 2.125rem);
  line-height: var(--headline4-line-height, 2.5rem);
  font-weight: var(--headline4-font-weight, 400);
  letter-spacing: var(--headline4-letter-spacing, 0.0073529412em);
`;

export const headline5 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--headline5-font-size, 1.5rem);
  line-height: var(--headline5-line-height, 2rem);
  font-weight: var(--headline5-font-weight, 400);
  letter-spacing: var(--headline5-letter-spacing, 0);
`;

export const headline6 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--headline6-font-size, 1.25rem);
  line-height: var(--headline6-line-height, 2rem);
  font-weight: var(--headline6-font-weight, 500);
  letter-spacing: var(--headline6-letter-spacing, 0.0125em);
`;

export const subtitle1 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--subtitle1-font-size, 1rem);
  line-height: var(--subtitle1-line-height, 1.75rem);
  font-weight: var(--subtitle1-font-weight, 400);
  letter-spacing: var(--subtitle1-letter-spacing, 0.009375em);
  text-transform: var(--subtitle1-text-transform, inherit);
`;

export const subtitle2 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--subtitle2-font-size, 0.875rem);
  line-height: var(--subtitle2-line-height, 1.375rem);
  font-weight: var(--subtitle2-font-weight, 500);
  letter-spacing: var(--subtitle2-letter-spacing, 0.0071428571em);
`;

export const body1 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--body1-font-size, 1rem);
  line-height: var(--body1-line-height, 1.5rem);
  font-weight: var(--body1-font-weight, 400);
  letter-spacing: var(--body1-letter-spacing, 0.03125em);
`;

export const body2 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--body2-font-size, 0.875rem);
  line-height: var(--body2-line-height, 1.25rem);
  font-weight: var(--body2-font-weight, 400);
  letter-spacing: var(--body2-letter-spacing, 0.0178571429em);
`;

export const button = css`
  ${fontStyle};
  ${textStyle2};
  font-size: var(--button-font-size, 0.875rem);
  line-height: var(--button-line-height, 2.25rem);
  font-weight: var(--button-font-weight, 500);
  letter-spacing: var(--button-letter-spacing, 0.0892857143em);
`;

export const caption = css`
  ${fontStyle};
  ${textStyle1};
  font-size: var(--caption-font-size, 0.75rem);
  line-height: var(--caption-line-height, 1.25rem);
  font-weight: var(--caption-font-weight, 400);
  letter-spacing: var(--caption-letter-spacing, 0.0333333333em);
`;

export const overline = css`
  ${fontStyle};
  ${textStyle2};
  font-size: var(--overline-font-size, 0.75rem);
  line-height: var(--overline-line-height, 2rem);
  font-weight: var(--overline-font-weight, 500);
  letter-spacing: var(--overline-letter-spacing, 0.1666666667em);
`;
