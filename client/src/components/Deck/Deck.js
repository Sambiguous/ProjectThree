import React, { Component } from "react";
import axios from "axios";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./Deck.css";

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

    axios.post('/api', objectToPassToAPI)
    .then(function (response) {
      console.log(response.data);
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
        <h2>
          Create a New Deck
          {this.state.deckName}
        </h2>
        {/*the next line may not call the route correctly */}
        <form className="deck-form"> 
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="sm-12">
            <input
              value={this.state.firstName}
              name="deckName"
              onChange={this.handleInputChange}
              type="text"
              className="deck"
              placeholder="Deck Name"
            /> 
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <input
              value={this.state.createdBy}
              name="createdBy"
              onChange={this.handleInputChange}
              type="text"
              className="deck"
              placeholder="creator"
            />
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <input
              value={this.state.numCards}
              name="numCards"
              onChange={this.handleInputChange}
              type="number"
              className="deck"
              placeholder="# of cards"
            />
          </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <input
              value={this.state.numFields}
              name="numFields"
              onChange={this.handleInputChange}
              type="number"
              className="deck"
              placeholder="# of fields"
            />
           </Col>
        </Row>
        <Row>
          <Col size="sm-12">
            <input
              value={this.state.handSize}
              name="handSize"
              onChange={this.handleInputChange}
              type="number"
              className="deck"
              placeholder="cards in hand"
            />
          </Col>
        </Row>

          <button onClick={this.handleDeckSubmit}>Submit</button>
        </Container>
        </form>
      </div>
    );
  }
};

export default Deck;
