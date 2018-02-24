
import "./CardMake.css";
import React, { Component } from "react";
import axios from "axios";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";


var cardArr = [];
var fieldArr = [];

const arrOfValues = [];

function makeCardArr(number){

    for (var i=0; i<number; i++) {
      console.log(`card to be entered` + [i]);
      cardArr.push(i);
    }
    console.log(cardArr);
}

function makeFieldArr(number){

  for (var i=0; i<number; i++) {
    console.log(`card to be entered` + [i]);
    fieldArr.push(i);
  }
  console.log(fieldArr);
}

//Create a Deck of cards with card specs

class CardMake extends Component {
  // Setting the component's initial state
  state = {
    deckName: "",
    numCards: "",
    numFields: "",
    createdBy: "",
    handSize: "",
    allCards: {},
    cardArr: [],
    fieldArr: []
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

  handleFieldSubmit = event => {
    event.preventDefault();

    const pushInfo = this.state.cardArr;
    console.log(pushInfo);
    
    arrOfValues.push(pushInfo);

    console.log(arrOfValues);

  }

  handleCardSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // API call to database to set info
    var objectToPassToDataBase = {
      deckName: this.state.deckName,
      numCards: this.state.numCards,
      numFields: this.state.numFields,
      createdBy: this.state.createdBy,
      handSize: this.state.handSize,
      cardArr: arrOfValues
    };
    console.log(objectToPassToDataBase);

    //axios.post("url", objectToPassToAPI);

    axios.post('/api', objectToPassToDataBase)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

    //THIS needs to go into the data call from the app.js
    makeCardArr(this.state.numCards)
    makeFieldArr(this.state.numFields)

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

    const arrayOfCards = ["1", "2", "3", "4"]
    const arrayOfFields = ["1", "2"]

    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h2>
          Enter your Deck's Cards
        </h2>
        <h4>
          Your Deck has {arrayOfFields.length} info fields
        </h4>
        <h4>
          Please format individual fields as such: "info", "info", "info"...
        </h4>

        <form className="deck-form"> 
        <Container style={{ marginTop: 30 }}>
          <div>
            { //can be anything array, object 
              arrayOfCards.map((val,index)=>
              // WHILE KEY DOES NOT EQUAL INDEX.LENGTH???

                (<div key={index}>
                    <h4>Card {val} Information:</h4>
                    <Row>
                      <Col size="sm-12">
                        <input
                          value={this.state.cardArr}
                          name="cardArr"
                          onChange={this.handleInputChange}
                          type="text"
                          className="deck"
                          placeholder="info"
                        /> 
                      </Col>
                    </Row>
                    {/* NEED to pause here, and push the card to the array, before sending the information out as a final build the cards call */}
                    <button onClick={this.handleFieldSubmit}>add info</button>
                </div>))
            }
          </div>
          
          <button onClick={this.handleCardSubmit}>Submit</button>
          </Container>
        </form>
      </div>
    );
  }
};

export default CardMake;
