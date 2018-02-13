import React, { Component } from "react";
import "./components/Deck.css";

class Deck extends Component {
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

    alert(`You entered a Deck called: ${this.state.deckName} with ${this.state.numCards} cards in it. Each card has ${this.state.numFields} pieces of information on it.`);

    // API call to database to set info
    var objectToPassToAPI = {
      deckName: this.state.deckName,
      numCards: this.state.numCards,
      numFields: this.state.numFields
    };

    //axios.post("url", objectToPassToAPI);

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
        {/*the next line may not call the route correctly */}
        <form className="form"> 
          <input
            value={this.state.firstName}
            name="deckName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Deck Name"
          />
          <input
            value={this.state.numCards}
            name="numCards"
            onChange={this.handleInputChange}
            type="number"
            placeholder="number of cards"
          />
          <input
            value={this.state.numFields}
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
