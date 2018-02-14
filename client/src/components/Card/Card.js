// CHANGE EVERYTHING HERE TO CARD SPECIFIC

import React, { Component } from "react";
import "./components/Card.css";

class Card extends Component {
  // Setting the component's initial state
  state = {
    deckName: "",
    numCards: "",
    numFields: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`You entered card number ${this.state.numCards} with ${this.state.numCards} cards in it. Each card has ${this.state.numFields} pieces of information on it.`);
    this.setState({
      deckName: "",
      numCards: "",
      numFields: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Enter a Deck of Cards (basic Deck structure) 
          {this.state.deckName}
        </p>
        <form className="form" action="/submitDeck" method="post">
          <input
            value={this.state.firstName}
            name="deckName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Deck Name"
          />
          <input
            value={this.state.lastName}
            name="numCards"
            onChange={this.handleInputChange}
            type="number"
            placeholder="number of cards"
          />
          <input
            value={this.state.lastName}
            name="numFields"
            onChange={this.handleInputChange}
            type="number"
            placeholder="number of information fields"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Deck;
