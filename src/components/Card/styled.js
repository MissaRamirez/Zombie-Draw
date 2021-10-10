import styled from 'styled-components';
import BG0 from '../../images/BG0.png';
import BG1 from '../../images/BG1.png';
import BG2 from '../../images/BG2.png';
import BG3 from '../../images/BG3.png';
import BGBack from '../../images/BGBack.png';
import ModernTop from '../../images/ModernTop.png';
import ModernTop2 from '../../images/ModernTop2.png';
import ModernTop3 from '../../images/ModernTop3.png';

import walker from '../../images/modern/walker.png';
import runner from '../../images/modern/runner.png';
import fatty from '../../images/modern/fatty.png';
import abomination from '../../images/modern/abomination.png';

import toxicWalker from '../../images/modern/toxicWalker.png';
import toxicRunner from '../../images/modern/toxicRunner.png';
import toxicFatty from '../../images/modern/toxicFatty.png';
import TOXICABOMINATION from '../../images/modern/TOXICABOMINATION.png';

import berserkerWalker from '../../images/modern/berserkerWalker.png';
import berserkerRunner from '../../images/modern/berserkerRunner.png';
import berserkerFatty from '../../images/modern/berserkerFatty.png';
import berserkerAbomination from '../../images/modern/berserkerAbomination.png';

import skinnerWalker from '../../images/modern/skinnerWalker.png';
import skinnerRunner from '../../images/modern/skinnerRunner.png';
import skinnerFatty from '../../images/modern/skinnerFatty.png';
import AllMIGHTO from '../../images/modern/AllMIGHTO.png';

import zombieWolf from '../../images/modern/zombieWolf.png';
import BLACKDOG from '../../images/blackDog.png';

import seekerZombie from '../../images/modern/seekerZombie.png';
import soilderZombie from '../../images/modern/soilderZombie.png';
import heavyFatty from '../../images/modern/heavyFatty.png';

import ABOMINAWILD from '../../images/ABOMINAWILD.png';
import HOBOMINATION from '../../images/HOBOMINATION.png';
import ABOMINACOP from '../../images/ABOMINACOP.png';
import PATIENT0 from '../../images/PATIENT0.png';

import actualCannibal from '../../images/actualCannibal.png';
import BATABOMINATION from '../../images/BATABOMINATION.png';
import BEARMANBOAR from '../../images/BEARMANBOAR.png';
import BIGFOOT from '../../images/BIGFOOT.png';
import CTHULHU from '../../images/CTHULHU.png';
import GEENWICHCREW from '../../images/GEENWICHCREW.png';
import LANKYMAN from '../../images/LANKYMAN.png';
import MUMMY from '../../images/MUMMY.png';

import D1 from '../../images/DangerBlue2.png';
import D2 from '../../images/DangerYellow2.png';
import D3 from '../../images/DangerOrange2.png';
import D4 from '../../images/DangerRed2.png';

export const CardBody = styled.div`
  font-family: 'Cracked';
  position:relative;
  padding-top: 5vh;
  margin: auto;
  flex:1;
  user-select: none; 
`;

 export const BGStyle = styled.div`
  border-radius: 2vh;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  background-image: url(
  ${props =>
    (props.backGround === 0 && BG0) ||
    (props.backGround === 1 && BG1) || 
    (props.backGround === 2 && BG2) ||
    (props.backGround === 3 && BG3) ||
    BGBack
  });
  background-repeat: no-repeat;
  background-position: center;
  margin: auto;
  width: 82vw;
  height: 126vw;
  @media (orientation: landscape) {
    width: 49vh;
    height: 85vh; 
  }
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: "black";
  position: relative;
  display:table;
  overflow: hidden;
`;

export const MonStyle = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 105%;
  position: absolute;

  margin-left: auto;
  margin-right: auto;
  right: 0;
  z-index: 1;

  height: 85%;
  width: 100%;
  bottom: 0;
  background-position: left bottom;
  ${props =>
      (props.monster === 'abomination' &&
        "background-image: url("+abomination+");"
      ) ||
      (props.monster === 'walker' && 
        "background-image: url("+walker+");"
      ) ||
      (props.monster === 'fatty' &&
        "background-image: url("+fatty+");"
      ) ||
      (props.monster === 'runner' &&
        "background-image: url("+runner+");"
      ) ||
      (props.monster === 'toxicWalker' &&
        "background-image: url("+toxicWalker+");"
      ) ||
      (props.monster === 'toxicRunner' &&
        "background-image: url("+toxicRunner+");"
      ) ||
      (props.monster === 'toxicFatty' &&
        "background-image: url("+toxicFatty+");"
      ) ||
      (props.monster === 'berserkerWalker' &&
        "background-image: url("+berserkerWalker+");"
      ) ||
      (props.monster === 'berserkerRunner' &&
        "background-image: url("+berserkerRunner+");"
      ) ||
      (props.monster === 'berserkerFatty' &&
        "background-image: url("+berserkerFatty+");"
      ) ||
      (props.monster === 'berserkerAbomination' &&
        "background-image: url("+berserkerAbomination+");"+
        "left=0;"
      ) ||
      
      (props.monster === 'skinnerWalker' &&
        "background-image: url("+skinnerWalker+");"
      ) ||
      (props.monster === 'skinnerRunner' &&
        "background-image: url("+skinnerRunner+");"
      ) ||
      (props.monster === 'skinnerFatty' &&
        "background-image: url("+skinnerFatty+");"
      ) ||
      (props.monster === 'seekerZombie' &&
        "background-image: url("+seekerZombie+");"
      ) ||
      (props.monster === 'zombieWolf' &&
        "background-image: url("+zombieWolf+");"+
        "background-position: right center;"
      ) ||
      (props.monster === 'actualCannibal' &&
        "background-image: url("+actualCannibal+");"+
        "height: 64%;"+
        "right: -46px;"+
        "left: -5%;"+
        "bottom: 6%;"
      ) ||
      (props.monster === 'BLACKDOG' &&
        "background-image: url("+BLACKDOG+");"+
        "right: -35px;"+
        "left: -5%;"+
        "height: 105%;"+
        "bottom: -13%;"
      ) ||
      (props.monster === 'GEENWICHCREW' &&
        "background-image: url("+GEENWICHCREW+");"+
        "right: 17%;"+
        "left: -14%;"+
        "height: 105%;"+
        "bottom: -12%;"
      ) ||
      (props.monster === 'BIGFOOT' &&
        "background-image: url("+BIGFOOT+");"+
        "left: 0%;"+
        "height: 105%;"+
        "bottom: -18%;"
      ) ||
      (props.monster === 'BEARMANBOAR' &&
        "background-image: url("+BEARMANBOAR+");"+
        "right: -12%;"+
        "left: -24%;"+
        "height: 105%;"+
        "bottom: -9%;"
      ) ||
      (props.monster === 'AllMIGHTO' &&
        "background-image: url("+AllMIGHTO+");"

      ) ||
      (props.monster === 'MUMMY' &&
        "background-image: url("+MUMMY+");"+
        "left:-11%;"+
        "right: -25%;"+
        "height: 105%;"+
        "bottom:-18%;"
      ) ||
      (props.monster === 'LANKYMAN' &&
        "background-image: url("+LANKYMAN+");"+
        "left:-10%;"+
        "height: 105%;"+
        "bottom:-18%;"
      ) ||
      (props.monster === 'TOXICABOMINATION' &&
        "background-image: url("+TOXICABOMINATION+");"
      ) ||
      (props.monster === 'HOBOMINATION' &&
        "background-image: url("+HOBOMINATION+");"+
        "height: 121%;"+
        "left:-27%;"+
        "bottom:-25%;"
      ) ||
      (props.monster === 'ABOMINACOP' &&
        "background-image: url("+ABOMINACOP+");"+
        "height: 121%;"+
        "left:-58%;"+
        "bottom:-28%;"
      ) ||
      (props.monster === 'PATIENT0' &&
        "background-image: url("+PATIENT0+");"+
        "right: -26%;"+
        "left:-25%;"+
        "height: 105%;"+
        "bottom:-18%;"
      ) ||
      (props.monster === 'ABOMINAWILD' &&
        "background-image: url("+ABOMINAWILD+");"+
        "height: 110%;"+
        "right: -53px;"+
        "left: -24%;"+
        "bottom: -16%;"
      ) ||    
      (props.monster === 'BATABOMINATION' &&
        "background-image: url("+BATABOMINATION+");"+
        "height: 105%;"+
        "left:-10%;"+
        "bottom:-13%;"
      ) ||  
      (props.monster === 'CTHULHU' &&
        "background-image: url("+CTHULHU+");"+
        "height: 105%;"+
        "left: 1%;"+
        "right: 21%;"+
        "bottom:-7%;"
      ) ||
      (props.monster === 'soilderZombie' &&
      "background-image: url("+soilderZombie+");"
    ) ||
    (props.monster === 'heavyFatty' &&
      "background-image: url("+heavyFatty+");"
    ) ||  
      "background-image:none"+
      "left: 0px;"
    }
`;

export const DangerWrapper = styled.div`
  display: flex;
  width: 30%;
  height: 50%;
  margin-top: 20%;
  margin-left: auto;
  flex-direction: column;
`;

export const SpawnDanger = styled.div`
  font-family: 'SCRATCHED';
  font-size: 6vh;
  display: flex;
  align-items: center;
  height: 22%;
  padding: 0 0 0 3vw;
  @media (orientation: landscape) {
    padding:0px 0px 0px 2vh;
  }
  margin-top:    ${props =>
    (props.DangerC === 'Red' && '0') ||
    'auto'
  };
  background-size: cover;
  background-image: url(
    ${props =>
      (props.DangerC === 'Blue' && D1) ||
      (props.DangerC === 'Yellow' && D2) || 
      (props.DangerC === 'Orange' && D3) ||
      D4
    });
  box-shadow: -2px 2px 2px 1px #353535;
  z-index: 5;
`;

export const CardHeaderName = styled.div`
  border-radius: 2vh 2vh 0 0;
  ${props =>
    (props.cardType === 'Modern'  &&
      'background-color: #1c1c1c;'+
      'color: #f9f9f9;'+
      'box-shadow: 0px 5px 0px 0px #1c1c1c;'
    ) ||
    (props.cardType === 'Modern2'  &&
      'background-color: #f4d500;'+
      'color: #1c1c1c;'+
      'box-shadow: 0px 5px 0px 0px #f4d500;'
    ) ||
    (props.cardType === 'Modern3'  &&
      'background-color: #e12727;'+
      'color: #f9f9f9;'+
      'box-shadow: 0px 5px 0px 0px #e12727;'
    ) ||
    ''
  }
  padding: 2vh 0px 1vh 4vw;
  font-size: 27px;
  @media (orientation: landscape) {
    padding: 2vh 0px 1vh 1vw;
    font-size: 6vh;
  }
`;

export const CardHeaderUnder = styled.div`
  background-image: url(
    ${props =>
      (props.cardType === 'Modern' && ModernTop) ||
      (props.cardType === 'Modern2' && ModernTop2) ||
      (props.cardType === 'Modern3' && ModernTop3) ||
      'none'
    });
  width: 100%;
  height: 11%;
  background-size: cover;
  
`;