import React, { Component } from "react";
import Card from "../Card";

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
      usedData: {},
      available: data.data,
      abomData: data.dataAbom,
      abomination: null,
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
    var abom = generateNumber(0, (Object.keys(abomData).length - 1));
    return (abomData[abom])
  }

  addAbom = () => {
    const { generateAbom } = this;
    var nextAbom = generateAbom();
    var Abom =
    {
      bg: "2",
      cardType: "Modern",
      dBlue: 1,
      dOrange: 1,
      dRed: 1,
      dYellow: 1,
      id: "0",
      img: nextAbom.img,
      name: nextAbom.name
    };
    this.setState({
      card: Abom
    });
    return
  }


  getRandom = () => {
    const { generateNumber, generateAbom } = this;
    const { min, max, available, usedData, allData, limit, bg } = this.state;
    var nextValue = generateNumber(min, max);
    var detail = available[nextValue]["id"];
    var used = [];
    used[Object.keys(usedData).length] = available[nextValue]["id"];

    var availableTmp = Object.create(available);
    availableTmp.splice(nextValue, 1);

    var cardData = allData.find(id => id.id == detail);
    var nextAbom = null;
    if (bg > 1 || bg == null) {
      this.setState({
        bg: 0
      });
    }
    else {
      this.setState({
        bg: (bg) + 1
      });
    }
    if (cardData.name === "ABOMINATION") {
      nextAbom = generateAbom();
      var Abom = {
        bg: "2",
        cardType: "Modern",
        dBlue: 1,
        dOrange: 1,
        dRed: 1,
        dYellow: 1,
        id: "0",
        img: nextAbom.img,
        name: nextAbom.name
      };
      this.setState({
        card: Abom
      });
    }
    else {
      this.setState({
        card: cardData
      });

    }
    if (max === 0) {
      var indepentant = Object.create(allData);
      this.setState({
        number: detail,
        max: limit,
        usedData: { ...usedData, ...used },
        available: [...indepentant]
      });
    }
    else {
      this.setState({
        number: detail,
        max: max - 1,
        usedData: { ...usedData, ...used },
        available: availableTmp
      });
    }
  }

  render() {
    const { card, bg } = this.state;
    const { getRandom, addAbom } = this;
    return (
      <div>
        <div>
          <Card id="card" Display={card} bg={bg} Random={getRandom} />
          <button id="generate" type="submit" onClick={addAbom} disabled={!card.name}>Draw Abomination</button>
        </div>
      </div>
    );
  }

}
