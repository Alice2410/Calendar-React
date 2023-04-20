import { createGlobalStyle } from "styled-components";
import Montserrat from './fonts/Montserrat-Thin.ttf';
import Roboto from './fonts/Roboto-Light.ttf'

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    font-weight: 100;
    src: url(${Montserrat}) format("ttf");
    font-display: swap;
  }

  @font-face {
    font-family: "Roboto";
    font-weight: 200;
    src: url(${Roboto}) format("truetype");
    font-display: swap;
  }
`

export default FontStyles;