import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import "./DeckMake.css";
import Navbar from "../../components/Navbar";

//Create a Deck of cards with card specs

class DeckMake extends Component {
  constructor (props) {

    super (props)

    this.state = {
      deckName: "",
      numCards: "",
      numFields: "",
      createdBy: props.user.displayName,
      handSize: "",
      allCards: [],
    };
  }


  handleInputChange = event => {

    const value = event.target.value;
    const name = event.target.name;

    this.setState({[name]: value});
  };

  handleDeckSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    var deckInfo = {
      newDeck: this.state
    };

    this.props.renderNewComponent("cardmake", deckInfo) 
  };

  render() {

    return (
      <div>
        <Navbar renderNewComponent={this.props.renderNewComponent}/>
      <br />
        <form className="deck-form"> 
        
        <h2>Step One</h2>

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
          <button className="deckmake-button" onClick={this.handleDeckSubmit}>Step Two</button>
          </Container>
        </form>
      </div>
    );
  }
};

export default DeckMake;
