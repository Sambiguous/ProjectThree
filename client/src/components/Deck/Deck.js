import React, { Component } from "react";
import "./components/Deck.css";

class Deck extends Component {
  // Setting the component's initial state
  state = {
    deckName: "",
    numCards: "",
    numFields: "",
    allCards: {
      cardInfo: {
        id: "",
        fieldInfo: []
      }
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
      numFields: this.state.numFields
    };

    //axios.post("url", objectToPassToAPI);

    // this.setState({
    //   deckName: "",
    //   numCards: "",
    //   numFields: ""
    // });
  };

  handleFieldSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`Card # ${this.state.allCards.cardInfo.id} entered`);

    // API call to database to set info
    var objectToPassToAPI = {
      cardId: this.state.allCards.cardInfo.id,
      cardField: this.state.allCards.cardInfo.fieldInfo
    };

    //axios.post("url", objectToPassToAPI);

    // DO THIS AFTER ALL CARD ARE ENTERED
    // this.setState({
    //   deckName: "",
    //   numCards: "",
    //   numFields: ""
    // });
  };

  renderDeck() {
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
          
          {/* {(() => {
            let cardRow = []
            for (var i = 0; i < this.state.numCards; i++) {
              // cardRow.push(<ObjectRow key={i} />)
              console.log("new card");
            }
            return cardRow
          })()} */}

          <button onClick={this.handleDeckSubmit}>Submit</button>
        </form>
        {this.renderCards}
      </div>
    );
  }

  renderCards() {
    // let cardRow = {
    //   id = "",
    //   fields = []
    // }
    for (var i = 0; i < this.state.numCards; i++) {
      this.state.allCards.cardInfo.id = i
      for (var ii = 0; ii < this.state.numFields; ii++) {
        return (
        <div>
          <form>
            <input
            value={this.state.allCards.cardInfo.fieldInfo}
            name="fieldInfo"
            onChange={this.handleInputChange}
            type="text"
            placeholder="card info field"
            />
            <button onClick={this.handleFieldSubmit}>Submit field</button>
        </form>
        </div>
      )}
    };
  }

}

export default Deck;
