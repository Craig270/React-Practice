import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick() {
    console.log("I'm working!");
  }

  render() {
    return (
      <div className="btn btn-primary">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

export default App;
