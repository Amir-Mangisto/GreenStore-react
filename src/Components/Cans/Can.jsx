import React from "react";

class Can extends React.Component {
  constructor(props) {
    super(props);
    this.state = { NameOfCan: " ", arrayOfCans: [] };
    this.TextStore = this.TextStore.bind(this);
    this.ClickButton = this.ClickButton.bind(this);
  }

  TextStore(event) {
    this.state.NameOfCan = event.target.value;
  }
  ClickButton() {
    this.state.arrayOfCans.push(this.state.NameOfCan);
    this.setState({ NameOfCan: this.state.NameOfCan });
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
        <p>{this.state.NameOfCan}</p>
        <ul>
          {this.state.arrayOfCans.map((veg) => {
            return <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Can;
