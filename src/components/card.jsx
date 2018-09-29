import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return <button>{this.props.value}</button>;
  }
}

export default Card;
