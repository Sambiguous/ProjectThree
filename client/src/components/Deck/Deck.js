import React, { Component } from "react";
import "./components/Deck.css";

//Create a Deck of cards with card specs

class Deck extends Component {
  // Setting the component's initial state
  state = {
    deckName: "",
    numCards: "",
    numFields: "",
    createdBy: "",
    handSize: "",
    allCards: {}
    }
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

  handleDeckSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`You entered a Deck called: ${this.state.deckName} with ${this.state.numCards} cards in it. Each card has ${this.state.numFields} pieces of information on it.`);

    // API call to database to set info
    var objectToPassToAPI = {
      deckName: this.state.deckName,
      numCards: this.state.numCards,
      numFields: this.state.numFields,
      createdBy: this.state.createdBy,
      handSize: this.state.handSize
    };

    //axios.post("url", objectToPassToAPI);

    axios.post('/decks', objectToPassToAPI)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.setState({
      deckName: "",
      numCards: "",
      numFields: "",
      createdBy: "",
      handSize: ""
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
          <input
            value={this.state.createdBy}
            name="createdBy"
            onChange={this.handleInputChange}
            type="text"
            placeholder="who made this Deck?"
          />
          <input
            value={this.state.handSize}
            name="handsize"
            onChange={this.handleInputChange}
            type="number"
            placeholder="number of cards in each 'hand' during play"
          />

          <button onClick={this.handleDeckSubmit}>Submit</button>
        </form>
        
      </div>
    )
  };


export default Deck;
