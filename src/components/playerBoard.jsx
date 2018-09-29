import React, { Component } from "react";
import Card from "./card"

class PlayerBoard extends Component {
  state = {
      cards:[

      ]
  };

  render() {
    return (
      <div>
        {this.state.cards.map(card => (
          <Card key={card.name} value={card.name} />
        ))}
      </div>
    );
  }
}

export default PlayerBoard;
