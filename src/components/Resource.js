import React, { Component } from "react";
import { RES } from "../constants/RES";

const RES_STATUS = {
  NOT_USED: 0,
  USED: 1
};

class Resource extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resource: props.resource,
      used: RES_STATUS.NOT_USED,
      resourceIconFunctionality: props.resourceIconFunctionality
    };
  }

  isFunctional(obj) {
    return obj.resourceIconFunctionality;
  }

  isGold(obj) {
    return obj.goldCount;
  }

  isBaseResource(obj) {
    return RES.BASE_RESOURCES.indexOf(obj.resource) >= 0;
  }

  hasOnClickHandler(obj) {
    return (
      this.isFunctional(obj) &&
      obj.resourceIconFunctionality.active &&
      this.isBaseResource(this.props)
    );
  }

  noLongerClickable(obj) {
    return this.isFunctional(obj) && !obj.resourceIconFunctionality.active;
  }

  componentWillReceiveProps(newProps) {
    if (this.state.used && this.noLongerClickable(newProps)) {
      this.setState({
        used: RES_STATUS.NOT_USED
      });
    }

    if (this.isFunctional(newProps)) {
      this.setState({
        resourceIconFunctionality: newProps.resourceIconFunctionality
      });
    }

    this.setState({
      resource: newProps.resource
    });
  }

  handleResourceClicked(clickedResource) {
    if (this.state.used) {
      this.state.resourceIconFunctionality.removeRes(clickedResource);
      this.setState({ used: RES_STATUS.NOT_USED });
    } else {
      this.state.resourceIconFunctionality.addRes(clickedResource);
      this.setState({ used: RES_STATUS.USED });
    }
  }

  getConditionalResourceImageAttributes() {
    let conditionalOptions = {};
    if (this.hasOnClickHandler(this.state)) {
      conditionalOptions.onClick = () =>
        this.handleResourceClicked(this.state.resource);
    }
    return conditionalOptions;
  }

  getImageSource(state) {
    console.log(state.resource)
    if (this.isGold(this.props)) {
      return require(`../assets/${state.resource}-${this.props.goldCount}.png`);
    } else {
      return require(`../assets/${state.resource}${state.used}.png`);
    }
  }

  render() {
    return (
      <div className="resourceIcon">
        {
          <img
            key={this.state.resource}
            src={this.getImageSource(this.state)}
            alt=""
            className="img-responsive"
            {...this.getConditionalResourceImageAttributes()}
          />
        }
      </div>
    );
  }
}

export default Resource;
