import React, { Component } from "react";
import "./App.css";
import Card from "./components/card";
// import CentreBoard from "./components/centreBoard";
// import PlayerBoard from "./components/playerBoard";
import { cardSet } from "./Cardset";

const CurrPlayer = {
  PLAYER1: 0,
  PLAYER2: 1
};

class App extends Component {
  state = {
    centreBoard: [],
    playerBoard1: [],
    playerBoard2: [],
    currPlayer: CurrPlayer.PLAYER1
  };

  handleCardSelection(card) {
    const centreBoard = this.state.centreBoard.filter(c => c.id !== card.id);
    this.setState({ centreBoard });
    if (this.state.currPlayer === CurrPlayer.PLAYER1) {
      const playerBoard1 = [...this.state.playerBoard1, card];
      const currPlayer = CurrPlayer.PLAYER2;
      this.setState({ playerBoard1 });
      this.setState({ currPlayer });
      console.log(this.state.currPlayer);
    } else {
      const playerBoard2 = [...this.state.playerBoard2, card];
      const currPlayer = CurrPlayer.PLAYER1;
      this.setState({ playerBoard2 });
      this.setState({ currPlayer });
      console.log(this.state.currPlayer);
    }
  }

  handlePopulateAge(age) {
    console.log(age);
    // const centreBoard = age;
    // this.setState({ centreBoard });
  }

  render() {
    return (
      <div className="App">
        {this.state.centreBoard.map(card => (
          <button
            key={card.name}
            onClick={() => this.handleCardSelection(card)}
          >
            {card.name}
          </button>
        ))}
        <br />
        Player 1:
        {this.state.playerBoard1.map(card => (
          <Card key={card.name} value={card.name} />
        ))}
        <br />
        Player 2:
        {this.state.playerBoard2.map(card => (
          <Card key={card.name} value={card.name} />
        ))}
        <br />
        <button onClick={() => this.handlePopulateAge(cardSet.age1)}>
          Age 1
        </button>
        <button onClick={() => this.handlePopulateAge(cardSet.age2)}>
          Age 2
        </button>
        <button onClick={() => this.handlePopulateAge(cardSet.age3)}>
          Age 3
        </button>
      </div>
    );
  }
}

export default App;
