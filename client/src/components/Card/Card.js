import React, { Component } from "react";
import "./components/Card.css";

//Create a Card constructor and add card to deck

class Card extends Component {
  // Setting the component's initial state
  state = {
      cardInfo: {
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

  handleCardSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`Card fields entered`);

    // API call to database to set info
    var objectToPassToAPI = {
      cardField: this.state.cardInfo.fieldInfo
    };

    //axios.post("url", objectToPassToAPI);

    // DO THIS AFTER ALL CARD ARE ENTERED
    // this.setState({
    //   fromDeck: "",
    //   fieldInfo: []
    // });
  };

  render() {

// MUST PULL DECK SPECS FIRST
// DECK NUMCARDS
// DECK NUM FIELDS

    for (var i = 0; i < numcards ; i++) {
      for (var ii = 0; ii < numFields; ii++) {
        return (
        <div>
          <form>
            <input
            value={this.state.cardInfo.fieldInfo}
            name="fieldInfo"
            onChange={this.handleInputChange}
            type="text"
            placeholder="card info field"
            />
            <button onClick={this.handleCardSubmit}>Submit field</button>
        </form>
        </div>
      )}
    };
  }

}

export default Card;
