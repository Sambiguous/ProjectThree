
import "./CardMake.css";
import React, { Component } from "react";
import axios from "axios";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import SoloCardInfo from "../../components/SoloCardInfo";


var fieldArr = [];

const arrOfValues = [];

// function makeCardArr(number){

//     for (var i=0; i<number; i++) {
//       console.log(`card to be entered` + [i]);
//       cardArr.push(i);
//     }
//     console.log(cardArr);
// }

// function makeFieldArr(number){

//   for (var i=0; i<number; i++) {
//     console.log(`card to be entered` + [i]);
//     fieldArr.push(i);
//   }
//   console.log(fieldArr);
// }

//Create a Deck of cards with card specs

class CardMake extends Component {
  // Setting the component's initial state
  constructor (props) {
    super (props)
  
    this.state = props.newDeck
  }

  componentDidMount() {
    console.log(this.state);
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

    // axios.post('/api', objectToPassToDataBase)
    // .then(function (response) {
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

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

    var cardArr = [];
    for(var i=0; i < this.state.numCards; i++){
      cardArr.push(<SoloCardInfo key={i} numFields={this.state.numFields} />)
    }

    // const arrayOfCards = cardArr
    // const arrayOfFields = ["1", "2"]

    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <h2>
          Enter your Deck's Cards
        </h2>
        <h4>
          Your Deck has {this.state.numFields} info fields
        </h4>

        <form className="deck-form"> 
        <Container style={{ marginTop: 30 }}>
          <div>
            {cardArr}
          </div>
          
          <button onClick={this.handleCardSubmit}>Submit</button>
          </Container>
        </form>
      </div>
    );
  }
};

export default CardMake;
