import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import { cardSet } from "./Cardset";
import { IconSet } from "./models/IconSet";
import { RES } from "./constants/RES";
import { iconSetToResources } from "./utils/iconSetToResources";
import ResourceIconArea from "./components/ResourceIconArea";

const PLAYER = {
  ONE: 0,
  TWO: 1
};

class App extends Component {
  constructor() {
    super();
    let totalPlayers = 2;

    this.state = {
      centreBoard: [],
      playerBoards: this.initialise("playerBoards", totalPlayers),
      playerGold: this.initialise("playerGold", totalPlayers),
      selectedCard: null,
      bucket: this.initBucket(),
      currPlayer: PLAYER.ONE,
      totalPlayers,
      militaryScore: this.initialise("militaryScore", totalPlayers)
    };
  }

  initialise(feature, totalPlayers) {
    let arr = [];
    for (let i = 0; i < totalPlayers; i++) {
      if (feature === "playerGold") {
        arr[i] = RES.STARTING_GOLD;
      } else if (feature === "militaryScore") {
        arr[i] = 0;
      } else {
        arr.push([]);
      }
    }
    return arr;
  }

  initBucket() {
    return new IconSet();
  }

  componentDidMount() {
    this.handlePopulateAge(cardSet.age1);
  }

  handleCardSelection(card) {
    this.setState({ selectedCard: card });
  }

  handlePopulateAge(age) {
    const centreBoard = age;
    this.setState({ centreBoard });
  }

  handleResourceAdd(res) {
    const bucket = this.state.bucket.addIcons(1, RES.toID(res));
    this.setState({ bucket });
  }

  handleResourceRemove(res) {
    const bucket = this.state.bucket.removeIcon(RES.toID(res));
    this.setState({ bucket });
  }

  getPlayerResources(player) {
    let playerResources = [];
    this.state.playerBoards[player].map(
      card => (playerResources = playerResources.concat(card.effect.get()))
    );
    return playerResources;
  }

  calculateGoldCostOfResource(res) {
    const opponent = (this.state.currPlayer + 1) % this.state.totalPlayers;
    console.log(this.state.playerBoards[this.state.currPlayer][0].effect.getDiscount());
    console.log(res)

    const hasDiscount = this.state.playerBoards[this.state.currPlayer].reduce(
      (hasDiscount, card) =>
        card.effect.discount && card.effect.getDiscount() === res
          ? (hasDiscount = true)
          : hasDiscount,
      false
    );
    
    if (hasDiscount) {
      return 1;
    }

    const oppResources = this.getPlayerResources(opponent);
    return oppResources.filter(resource => res === resource).length + 2;
  }

  intersection(cost, bucket) {
    const selectedCardResources = this.state.selectedCard.cost.get();
    const selectedCardResourcesRemovedGold = selectedCardResources.reduce(
      (resourceSet, res) =>
        res === "gold" ? resourceSet : [...resourceSet, res],
      []
    );

    let reqGold = selectedCardResourcesRemovedGold.reduce(
      (totalGold, res) => (totalGold += this.calculateGoldCostOfResource(res)),
      selectedCardResources.length - selectedCardResourcesRemovedGold.length
    );

    for (let i = 0; i < cost.length; i++) {
      if (bucket.indexOf(cost[i]) >= 0) {
        bucket.splice(bucket.indexOf(cost[i]), 1);
        reqGold -= this.calculateGoldCostOfResource(cost[i]);
      }
    }
    return reqGold;
  }

  bucketHasRequiredRes() {
    let reqGold = this.intersection(
      this.state.selectedCard.cost.get(),
      this.state.bucket.get()
    );

    return this.state.playerGold[this.state.currPlayer] >= reqGold;
  }

  handleCardProcure(card) {
    let playerBoards = this.state.playerBoards;
    let newPlayerBoard = [...playerBoards[this.state.currPlayer], card];
    playerBoards[this.state.currPlayer] = newPlayerBoard;

    let playerGold = this.state.playerGold;
    let newPlayerGold =
      this.state.playerGold[this.state.currPlayer] -
      this.intersection(
        this.state.selectedCard.cost.get(),
        this.state.bucket.get()
      ) +
      this.state.selectedCard.effect.get().filter(res => res === "gold").length;
    playerGold[this.state.currPlayer] = newPlayerGold;

    let militaryScore = this.state.militaryScore;
    let newMilitaryScore =
      this.state.militaryScore[this.state.currPlayer] +
      this.state.selectedCard.effect.get().filter(res => res === "military")
        .length;
    militaryScore[this.state.currPlayer] = newMilitaryScore;

    this.setState({
      centreBoard: this.state.centreBoard.filter(c => c.name !== card.name),
      playerBoards,
      playerGold,
      currPlayer: (this.state.currPlayer + 1) % this.state.totalPlayers,
      selectedCard: null,
      bucket: this.initBucket(),
      militaryScore
    });
  }

  render() {
    return (
      <div className="App">
        <div className="cards centreBoard">
          {this.state.centreBoard.map(card => (
            <Card
              key={card.name}
              card={card}
              onClick={() => this.handleCardSelection(card)}
              action={"Select"}
            />
          ))}
        </div>
        <br />
        <div className="playerArea">
          {this.state.playerBoards.map((board, idx) => (
            <div key={idx} className={"playerBoard player" + (idx + 1)}>
              Player {idx + 1} board:
              <div key={idx} className="cards">
                {board.map(card => (
                  <Card
                    key={card.name}
                    resourceIconFunctionality={{
                      addRes: this.handleResourceAdd.bind(this),
                      removeRes: this.handleResourceRemove.bind(this),
                      active: this.state.currPlayer === idx
                    }}
                    card={card}
                    action={"Use"}
                  />
                ))}
              </div>
              Gold: {this.state.playerGold[idx]}
            </div>
          ))}
        </div>
        <br />
        Military: {this.state.militaryScore[0] - this.state.militaryScore[1]}
        <br />
        Selected Card:
        <div className="selectedCard">
          {this.state.selectedCard ? (
            <Card
              key={this.state.selectedCard.name}
              card={this.state.selectedCard}
              action={"Buy"}
              disabled={() => !this.bucketHasRequiredRes()}
              onClick={() => this.handleCardProcure(this.state.selectedCard)}
            />
          ) : (
            ""
          )}
        </div>
        <br />
        <ResourceIconArea name="Required Resources" outsideClass="">
          {this.state.selectedCard
            ? iconSetToResources(
                this.state.selectedCard.cost,
                "requiredResources"
              )
            : ""}
        </ResourceIconArea>
        <br />
        <ResourceIconArea name="Bucket" outsideClass="bucketArea">
          {iconSetToResources(this.state.bucket, "bucket")}
        </ResourceIconArea>
        <div className="ages">
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
      </div>
    );
  }
}

export default App;
