import React, { Component } from "react";
import Counter from "./Counter";

export default class Child extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg-success">
        <p>Below is the current count but I am a child</p>
        <h3>{this.props.count}</h3>
      </div>
    );
  }
}
