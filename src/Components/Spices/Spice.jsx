import React from "react";

class Spice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { NameOfSpice: " ", arrayOfSpice: [] };
    this.TextStore = this.TextStore.bind(this);
    this.ClickButton = this.ClickButton.bind(this);
  }

  TextStore(event) {
    this.state.NameOfSpice = event.target.value;

  }
  ClickButton() {
    this.state.arrayOfSpice.push(inp.value);
    this.setState({ NameOfSpice: inp.value });
  }
  render() {
    return (
      <div className="addVegStyle">
        <h1>
          THIS COMPONENT IS TO BE USED TO ADD <strong>SPICE</strong> TO THE
          STORE
        </h1>
        <input type="text" onChange={this.TextStore} />
        <button onClick={this.ClickButton}>Click Here</button>
        <p>{this.state.NameOfSpice}</p>
        <ul>
          {this.state.arrayOfSpice.map((veg) => {
            return <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Spice;
