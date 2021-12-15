import React from "react";

class Fruit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { NameOfFruit: " ", arrayOfFruit: [] };
    this.TextStore = this.TextStore.bind(this);
    this.ClickButton = this.ClickButton.bind(this);
  }

  TextStore(event) {
    this.state.NameOfFruit = event.target.value;
  }

  ClickButton() {
    this.state.arrayOfFruit.push(inp.value);
    this.setState({ NameOfFruit: inp.value });
  }
  
  render() {
    return (
      <div className="addVegStyle">
        <h1>
          THIS COMPONENT IS TO BE USED TO ADD <strong>FRUIT</strong> TO THE
          STORE
        </h1>
        <input type="text" onChange={this.TextStore} />
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
