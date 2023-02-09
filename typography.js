import { css } from '@dreamworld/pwa-helpers/lit.js';
import * as literals from './typography-literals.js';

export const Typography = css`
  h1, .headline1 {
    ${literals.headline1};
  }
  h2, .headline2 {
    ${literals.headline2};
  }
  h3, .headline3 {
    ${literals.headline3};
  }
  h4, .headline4 {
    ${literals.headline4};
  }
  h5, .headline5 {
    ${literals.headline5};
  }
  h6, .headline6 {
    ${literals.headline6};
  }
  .subtitle1 {
    ${literals.subtitle1};
  }
  .subtitle2 {
    ${literals.subtitle2};
  }
  .body1 {
    ${literals.body1};
  }
  .body2 {
    ${literals.body2};
  }
  .button {
    ${literals.button};
  }
  .caption {
    ${literals.caption};
  }
  .overline {
    ${literals.overline};
  }
`;

export const typography = Typography;