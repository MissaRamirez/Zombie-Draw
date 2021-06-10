import { createGlobalStyle } from 'styled-components';
import Cracked from './Cracked.ttf';
import SCRATCHED from './BLUEFISHSCRATCHED_Demo.otf';

export const  GlobalFonts=createGlobalStyle`

    @font-face {
        font-family: "Cracked";
        src: url(${Cracked});
      }
    @font-face {
        font-family: "SCRATCHED";
        src: url(${SCRATCHED});
      }
`;
