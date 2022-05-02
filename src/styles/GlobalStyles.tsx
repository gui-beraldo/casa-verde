import { createGlobalStyle } from 'styled-components';
import { device } from 'styles/sizes';

const GlobalStyles = createGlobalStyle`

  body {
    font-family: 'Montserrat', sans-serif;

    background-image: url('/images/body-shape-mobile.svg'), url('/images/bg.jpg');
      background-repeat: no-repeat, repeat-y;
      background-position: right top 2vh, center;
      background-size: auto, 100vmax;

    @media ${device.tabletM} {
      background-image: url('/images/body-shape.svg'), url('/images/bg.jpg');
        background-repeat: no-repeat, repeat-y;
        background-position: right top, center;
        background-size: clamp(200px, 70%, 1200px), 100vmax;
    }
  }

  h1, h2, h3 {
    font-family: 'Elsie Swash Caps', serif;
  }
`;

export default GlobalStyles;
