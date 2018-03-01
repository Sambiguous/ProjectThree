import "./CardMake.css";
import React, { Component } from "react";
import axios from "axios";
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

    console.log("this is tha blank state at the top of the CardMake component:"+this.state);
    //this console log shows us [Object Object]
  };

  handleInputChange = (property, value, index) => {
    this.state.cards[index][property] = value;
  };

  handleCardSubmit = event => {
    event.preventDefault();
    console.log("handle card submit - this.state: " + this.state)
    var objectToPassToDataBase = this.state;
    console.log("obect we are passing in:" + objectToPassToDataBase);
    //this console log shows us [Object Object] and there fore is not passing the state to the POST route

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
        <p> </p>
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