import { createGlobalStyle } from 'styled-components';
import { device } from 'styles/sizes';

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Montserrat', sans-serif;

    background-image: url('/images/bg2.jpg');
      background-repeat: repeat-y;
      background-position: center;
      background-size: 100vmax;

    @media ${device.tabletM} {
      background-image: url('/images/body-shape.svg'), url('/images/bg2.jpg');
        background-repeat: no-repeat, repeat-y;
        background-position: right top, center;
        background-size: 70%, 100vmax;
    }
  }

  h1, h2, h3 {
    font-family: 'Elsie Swash Caps', serif;
  }
`;

export default GlobalStyles;
