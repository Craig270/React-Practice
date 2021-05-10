import React from "react";
//https://swapi.dev/api/people/1/
class Fetch extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/1/")
      .then((response) => response.json())
      .then((data) => this.setState({ character: data }));
  }

  render() {
    return (
      <div>{this.state.loading ? this.state.character.name : "Loading..."}</div>
    );
  }
}

export default Fetch;
