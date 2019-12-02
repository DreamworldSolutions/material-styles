import { css } from 'lit-element';
import '@polymer/font-roboto/roboto.js';
export const Typography = css`
  h1, .headline1,
  h2, .headline2,
  h3, .headline3,
  h4, .headline4,
  h5, .headline5,
  h6, .headline6,
  .subtitle1,
  .subtitle2,
  .body1,
  .body2,
  .button,
  .caption,
  .overline {
    font-family: Roboto, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  h1, .headline1,
  h2, .headline2,
  h3, .headline3,
  h4, .headline4,
  h5, .headline5,
  h6, .headline6,
  .subtitle1,
  .subtitle2,
  .body1,
  .body2,
  .caption{
    text-decoration: inherit;
    text-transform: inherit;
  }

  .button,
  .overline{
    text-decoration: none;
    text-transform: uppercase;
  }

  h1, .headline1 {
    font-size: 6rem;
    line-height: 6rem;
    font-weight: 300;
    letter-spacing: -0.015625em;
  }
  h2, .headline2 {
    font-size: 3.75rem;
    line-height: 3.75rem;
    font-weight: 300;
    letter-spacing: -0.0083333333em;
  }
  h3, .headline3{
    font-size: 3rem;
    line-height: 3.125rem;
    font-weight: 400;
  }
  h4, .headline4 {
    font-size: 2.125rem;
    line-height: 2.5rem;
    font-weight: 400;
    letter-spacing: 0.0073529412em;
  }
  h5, .headline5 {
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 400;
  }
  h6, .headline6 {
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.0125em;
  }
  .subtitle1 {
    font-size: 1rem;
    line-height: 1.75rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
  }
  .subtitle2 {
    font-size: 0.875rem;
    line-height: 1.375rem;
    font-weight: 500;
    letter-spacing: 0.0071428571em;
  }
  .body1 {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    letter-spacing: 0.03125em;
  }
  .body2 {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0178571429em;
  }
  .button {
    font-size: 0.875rem;
    line-height: 2.25rem;
    font-weight: 500;
    letter-spacing: 0.0892857143em;
  }
  .caption {
    font-size: 0.75rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.0333333333em;
  }
  .overline {
    font-size: 0.75rem;
    line-height: 2rem;
    font-weight: 500;
    letter-spacing: 0.1666666667em;
  }

 /*
 h1, .headline1 {
    font-size: 96px;
    line-height: 127px;
    font-weight: 300;
    letter-spacing: -1.5px;
  }
  h2, .headline2 {
    font-size: 60px;
    line-height: 79px;
    font-weight: 300;
    letter-spacing: -0.5px;
  }
  h3, .headline3{
    font-size: 48px;
    line-height: 63px;
    font-weight: 400;
    letter-spacing: 0;
  }
  h4, .headline4 {
    font-size: 34px;
    line-height: 45px;
    font-weight: 400;
    letter-spacing: 0.25px;
  }
  h5, .headline5 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    letter-spacing: 0px;
  }
  h6, .headline6 {
    font-size: 20px;
    line-height: 26px;
    font-weight: 500;
    letter-spacing: 0.15px;
  }
  .subtitle1 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.15px;
  }
  .subtitle2 {
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.1px;
  }
  .body1 {
    font-size: 16px;
    line-height: 28px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
  .body2 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    letter-spacing: 0.25px;
  }
  .button {
    font-size: 14px;
    line-height: 19px;
    font-weight: 500;
    letter-spacing: 1.25px;
  }
  .caption {
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
  }
  .overline {
    font-size: 10px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 1.5px;
  } 
  */
  
`;

export const typography = Typography;