import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickDown = this.handleClickDown.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }

  handleClickDown() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button className="btn btn-warning" onClick={this.handleClick}>
          Up!!
        </button>
        <button className="btn btn-danger" onClick={this.handleClickDown}>
          Down!!
        </button>
      </div>
    );
  }
}

export default App;
