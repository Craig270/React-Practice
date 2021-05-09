import React, { Component } from "react";
import Conditional from "./Conditional";

export default class ColorCounts extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  render() {
    return (
      <div>
        <h3>Words</h3>
        <Conditional isLoading={this.state.isLoading} />
      </div>
    );
  }
}
