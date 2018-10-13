import React, { Component } from "react";
import { iconSetToResources } from "../utils/iconSetToResources";
import ResourceIconArea from "./ResourceIconArea";

const Name = props => <div className="card-name">{props.name}</div>;

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resourceIconFunctionality: props.resourceIconFunctionality
    };
  }
  
  componentWillReceiveProps(newProps) {
    this.setState({
      resourceIconFunctionality: newProps.resourceIconFunctionality
    });
  }

  getButtonOptions() {
    var options = {};
    if (this.props.disabled && this.props.disabled()) {
      options.disabled = "disabled";
    }
    return options;
  }

  render() {
    return (
      <div className="card">

        <Name name={this.props.card.name} />

        <ResourceIconArea name="Cost" outsideClass="card-cost">
          {iconSetToResources(this.props.card.cost, this.props.card.name)}
        </ResourceIconArea>

        <ResourceIconArea name="Effect" outsideClass="card-effect">
          {iconSetToResources(this.props.card.effect, this.props.card.name, {
            resourceIconFunctionality: this.state.resourceIconFunctionality
          })}
        </ResourceIconArea>
        <button {...this.getButtonOptions()} onClick={this.props.onClick}>
          {this.props.action}
        </button>
      </div>
    );
  }
}

export default Card;
