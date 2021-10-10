import React, {Fragment} from 'react';
import {BGStyle,MonStyle,CardBody,DangerWrapper,SpawnDanger,CardHeaderName,CardHeaderUnder} from './styled';

const Card = props => {
  const {Display,Random,bg} = props;
	return(
		<CardBody>
			<BGStyle backGround={bg} onClick={Random}>
				{Display.name==null?
					null
					:<Fragment>
						<MonStyle monster={Display.img}/>
						<CardHeaderName cardType={Display.cardType}>{Display.name}</CardHeaderName>
						<CardHeaderUnder cardType={Display.cardType}></CardHeaderUnder>
						<DangerWrapper>
							<SpawnDanger DangerC="Red">{Display.dRed}</SpawnDanger>
							<SpawnDanger DangerC="Orange">{Display.dOrange}</SpawnDanger>
							<SpawnDanger DangerC="Yellow">{Display.dYellow}</SpawnDanger>
							<SpawnDanger DangerC="Blue">{Display.dBlue}</SpawnDanger>
						</DangerWrapper>
					</Fragment>
				}
			</BGStyle>
		</CardBody>
	);
}

export default Card;