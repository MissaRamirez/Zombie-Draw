import React, {Fragment} from 'react';
import {BGStyle,MonStyle,CardBody,DangerWrapper,SpawnDanger,CardHeaderName,CardHeaderUnder} from './styled';

const Card = props => {
  const {Display,Random,bg} = props;
	var bgtemp
	bg==null?
		bgtemp=null:
		bgtemp=bg.toString();
	return(
		<CardBody>
			<BGStyle backGround={bgtemp} onClick={Random}>
				<MonStyle monster={Display.img}/>
				{Display.name==null?
						null
						:<Fragment>
							<CardHeaderName cardType={Display.cardType} id="name">{Display.name}</CardHeaderName>
							<CardHeaderUnder cardType={Display.cardType} id="" ></CardHeaderUnder>
						</Fragment>
				}
				<DangerWrapper>
					{
						Display.dRed==null?
							null:
							<SpawnDanger DangerC="Red">{Display.dRed}</SpawnDanger>
					}
					{
						Display.dOrange==null?
							null:
							<SpawnDanger DangerC="Orange">{Display.dOrange}</SpawnDanger>
					}
					{
						Display.dYellow==null?
							null:
							<SpawnDanger DangerC="Yellow">{Display.dYellow}</SpawnDanger>
					}
					{
						Display.dBlue==null?
							null:
							<SpawnDanger DangerC="Blue">{Display.dBlue}</SpawnDanger>
					}
				</DangerWrapper>
			</BGStyle>
		</CardBody>
	);
}

export default Card;