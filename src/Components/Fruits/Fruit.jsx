import React from "react";

class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { NameOfFruit: " ", arrayOfFruit: [] };
    this.TextStore = this.TextStore.bind(this);
    this.ClickButton = this.ClickButton.bind(this);
  }

  TextStore(event) {
    console.log(event.target.value);
    this.setState({ text: event.target.value });
  }
  ClickButton() {
    const inp = document.getElementById("inputIdFruit");
    this.state.arrayOfFruit.push(inp.value);
    inp.value = " ";
    this.setState({ NameOfFruit: inp.value });
  }
  render() {
    return (
      <div className="addVegStyle">
        <h1>
          THIS COMPONENT IS TO BE USED TO ADD <strong>FRUIT</strong> TO THE
          STORE
        </h1>
        <input id="inputIdFruit" />
        <button onClick={this.ClickButton}>Click Here</button>
        <p>{this.state.NameOfFruit}</p>
        <ul>
          {this.state.arrayOfFruit.map((veg) => {
            return <li>{veg}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Fruit;
