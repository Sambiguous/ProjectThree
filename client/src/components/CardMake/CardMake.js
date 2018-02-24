
import "./CardMake.css";
import React, { Component } from "react";
import axios from "axios";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";


var cardArr = [];
var fieldArr = [];

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

  handleCardSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // API call to database to set info
    var objectToPassToDataBase = {
      deckName: this.state.deckName,
      numCards: this.state.numCards,
      numFields: this.state.numFields,
      createdBy: this.state.createdBy,
      handSize: this.state.handSize
    };

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

        <form className="deck-form"> 
        <Container style={{ marginTop: 30 }}>
          {/* This currently works, trying to swap to an indep this(dot)function */}
          <div>
            {(()=>{
              let container =[];
              let arr = arrayOfCards //can be anything array, object 
              arr.forEach((val,index)=>{
                container.push(<div key={index}>
                              <h2>'Card {val} Information:'</h2>
                              <Row>
                                <Col size="sm-12">
                                  <input
                                    value={this.state.firstName}
                                    name="deckName"
                                    onChange={this.handleInputChange}
                                    type="text"
                                    className="deck"
                                    placeholder="phrase"
                                  /> 
                                </Col>
                              </Row>
                              </div>)
                            });
                        return container;     
            })()}
          </div>
          
          <button onClick={this.handleCardSubmit}>Submit</button>
          </Container>
        </form>
      </div>
    );
  }
};

export default CardMake;
