import React from "react";

class Addveg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { NameOfVeg: " ", arrayOfVeg: [] };
    this.TextStore = this.TextStore.bind(this);
    this.ClickButton = this.ClickButton.bind(this);
  }

  TextStore(event) {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }
  ClickButton() {
    const inp = document.getElementById("inputId");
    this.state.arrayOfVeg.push(inp.value);
    inp.value = " ";
    this.setState({ NameOfVeg: inp.value });
  }
  render() {
    return (
      <div className="addVegStyle">
        <h1>
          THIS COMPONENT IS TO BE USED TO ADD <strong>VEGETABLE</strong> TO THE
          STORE
        </h1>

        <input id="inputId" />
        <button onClick={this.ClickButton}>Click Here</button>
        <p>{this.state.NameOfVeg}</p>
        <ul>
          {this.state.arrayOfVeg.map((veg) => {
            return <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Addveg;
