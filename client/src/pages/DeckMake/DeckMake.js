import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./DeckMake.css";

//Create a Deck of cards with card specs

class DeckMake extends Component {
  constructor (props) {

    super (props)

    // Setting the component's initial state
    this.state = {
      deckName: "",
      numCards: "",
      numFields: "",
      createdBy: "",
      handSize: "",
      allCards: {},
      cardArr: [],
      fieldArr: []
    };
}

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

    // API call to database to set info
    var objectToPassToAPI = 
    {newDeck: {
      deckName: this.state.deckName,
      numCards: this.state.numCards,
      numFields: this.state.numFields,
      createdBy: this.state.createdBy,
      handSize: this.state.handSize,
      allCards: {},
      cardArr: [],
      fieldArr: []
      }
    };

    console.log("if the data is coming in from the objecttopasstoAPI, it should show below this line:");
    console.log(objectToPassToAPI);

    this.props.renderNewComponent("cardmake", objectToPassToAPI) 
    
    this.setState({
      deckName: "",
      numCards: "",
      numFields: "",
      createdBy: "",
      handSize: "",
      cardArr: [],
      fieldArr: []
    });

  };

  render() {

    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h3>Step One:</h3>
        <h3>Input New Deck Basics</h3>
        {/*the next line may not call the route correctly */}
        <form className="deck-form"> 
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="sm-12">
              <input
                value={this.state.deckName}
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
          <button onClick={this.handleDeckSubmit}>Step Two</button>
          </Container>
        </form>
      </div>
    );
  }
};

export default DeckMake;
