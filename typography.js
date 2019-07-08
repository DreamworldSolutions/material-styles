/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt


Typographic styles are provided matching the Material Design standard styles:
http://www.google.com/design/spec/style/typography.html#typography-standard-styles
Note that these are English/Latin centric styles. You may need to further adjust
line heights and weights for CJK typesetting. See the notes in the Material
Design typography section.
*/
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
  .field {
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
  }
`;