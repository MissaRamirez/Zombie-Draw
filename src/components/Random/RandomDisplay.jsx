import React, { Component } from "react";
import Card from "../Card";
import { FrameContainer, Button, ButtonContainer } from './styled';
const data = require('../../common/data');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: Object.keys(data.data).length - 1,
      limit: Object.keys(data.data).length - 1,
      number: "default",
      card: { id: null },
      allData: data.data,
      available: data.data,
      abomData: data.dataAbom,
      bg: null
    }
  }

  componentDidMount() {
    var indepentant = Object.create(this.state.available);
    this.setState({
      allData: [...indepentant]
    });
  }

  generateNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
  }

  generateAbom = () => {
    const { abomData } = this.state;
    const { generateNumber } = this;
    var nextAbom = generateNumber(0, (Object.keys(abomData).length - 1));
    var Abom = {
      bg: "3",
      cardType: "Modern",
      dBlue: 1,
      dOrange: 1,
      dRed: 1,
      dYellow: 1,
      id: "0",
      img: abomData[nextAbom].img,
      name: abomData[nextAbom].name
    };
    return Abom;
  }

  generateAbomClick = () => {
    const { generateAbom } = this;
    var cardData = generateAbom();
    this.setState({
      bg: 3,
      card: cardData
    });
    return;
  }

  getRandom = () => {
    const { generateNumber, generateAbom } = this;
    const { min, max, available, allData, limit, bg } = this.state;
    var nextValue = generateNumber(min, max);
    var detail = available[nextValue]["id"];
    var availableTmp = Object.create(available);
    availableTmp.splice(nextValue, 1);
    var cardData = allData.find(id => id.id === detail);
    var nextBackground;
    if (bg > 1 || bg == null) {
      nextBackground = 0;
    }
    else {
      nextBackground = (bg) + 1;
    }
    if (cardData.name === "ABOMINATION") {
      cardData = generateAbom();
      nextBackground = 3;
    }
    if (max === 0) {
      this.setState({
        number: detail,
        max: limit,
        available: [...allData],
        bg: nextBackground,
        card: cardData
      });
    }
    else {
      this.setState({
        number: detail,
        max: max - 1,
        available: availableTmp,
        bg: nextBackground,
        card: cardData
      });
    }
    return;
  }

  render() {
    const { card, bg } = this.state;
    const { getRandom, generateAbomClick } = this;
    return (
      <div>
        <FrameContainer>
          <Card Display={card} bg={bg} Random={getRandom} />
          <ButtonContainer>
            <Button type="submit" onClick={generateAbomClick}>Draw Abomination</Button>
            <Button type="submit" onClick={getRandom}>Draw Zombie</Button>
          </ButtonContainer>
        </FrameContainer>
      </div>
    );
  }
}
