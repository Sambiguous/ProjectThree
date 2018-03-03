import "./CardMake.css";
import React, { Component } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import Container from "../../components/Container";
import SoloCardInfo from "../../components/SoloCardInfo";


class CardMake extends Component {

  constructor (props) {
    super (props);
    let cards = [];

    for(var i=0; i < props.newDeck.numCards; i++){
      cards.push({
        fromDeck: props.newDeck.deckName,
        "fieldInfo0": null,
        "fieldInfo1": null,
        "fieldInfo2": null,
        "fieldInfo3": null,
        "fieldInfo4": null,
        "fieldInfo5": null
      });
    };
  
    this.state = {
      deckInfo: props.newDeck,
      cards: cards
    };
  };

  handleInputChange = (property, value, index) => {
    this.state.cards[index][property] = value;
  };

  handleCardSubmit = event => {
    event.preventDefault();

    var objectToPassToDataBase = this.state;
    console.log(this.state)

    axios.post('/api/deckcreate', objectToPassToDataBase)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    var cardArr = [];
    for(var i=0; i < this.state.deckInfo.numCards; i++){
      cardArr.push(<SoloCardInfo key={i} index={i} input={this.handleInputChange} updateFieldInfo={this.updateFieldInfo} numFields={this.state.deckInfo.numFields} />)
    };

    return (
      <div>
        <Navbar renderNewComponent={this.props.renderNewComponent} />
        <h2>Step Two:</h2>
        <h2>Enter your Deck's Cards</h2>
        <h4>Your Cards each have {this.state.deckInfo.numFields} info fields</h4>
        <Container style={{ marginTop: 30 }}>
          {cardArr}
          <button onClick={this.handleCardSubmit}>Submit</button>
        </Container>
      </div>
    );
  }
};

export default CardMake;