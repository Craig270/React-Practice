import React, { Component } from "react";

export default class ButtonLogin extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? <h3>Logged In</h3> : <h3>Logged Out</h3>}
        <button className="btn btn-success" onClick={this.handleClick}>
          {this.state.isLoggedIn ? `Logout` : `Login`}
        </button>
      </div>
    );
  }
}
