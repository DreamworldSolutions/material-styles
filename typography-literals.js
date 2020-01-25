import { css } from 'lit-element';
import '@polymer/font-roboto/roboto.js';


export const fontStyle = css`
  font-family: Roboto, sans-serif;
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
  font-size: 6rem;
  line-height: 6rem;
  font-weight: 300;
  letter-spacing: -0.015625em;
`;

export const headline2 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 3.75rem;
  line-height: 3.75rem;
  font-weight: 300;
  letter-spacing: -0.0083333333em;
`;

export const headline3 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 3rem;
  line-height: 3.125rem;
  font-weight: 400;
`;

export const headline4 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 2.125rem;
  line-height: 2.5rem;
  font-weight: 400;
  letter-spacing: 0.0073529412em;
`;

export const headline5 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 400;
`;

export const headline6 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
`;

export const subtitle1 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 1rem;
  line-height: 1.75rem;
  font-weight: 400;
  letter-spacing: 0.009375em;
`;

export const subtitle2 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 0.875rem;
  line-height: 1.375rem;
  font-weight: 500;
  letter-spacing: 0.0071428571em;
`;


export const body1 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.03125em;
`;

export const body2 = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0178571429em;
`;

export const button = css`
  ${fontStyle};
  ${textStyle2};
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
`;

export const caption = css`
  ${fontStyle};
  ${textStyle1};
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.0333333333em;
`;

export const overline = css`
  ${fontStyle};
  ${textStyle2};
  font-size: 0.75rem;
  line-height: 2rem;
  font-weight: 500;
  letter-spacing: 0.1666666667em;
`;