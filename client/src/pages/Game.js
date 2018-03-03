import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DiscardPile from "../components/DiscardPile";
import CardPile from "../components/CardPile";
import ActiveBar from "../components/ActiveBar";
import PlayingCards from "../components/PlayingCards";
import "./Game.css"; 
import GameButtons from "../components/GameButtons";
import { Button} from 'reactstrap';
import firebase from '../firebase';

let click = 0;

function shuffleArray(arr) {
  let shuffledArray = [].concat(arr);
  let currentIndex = shuffledArray.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  };

  return shuffledArray;
};

class Game extends Component {

	constructor(props) {
    super(props)
    this.state = {
      gamePath: `games/${props.code}`,
      code: props.code,
      activeCardIndexes: [],
      message: ''
    };
  };

  componentDidMount(){
    let handRef = firebase.database().ref().child(`games/${this.state.code}/hands/${this.props.user.displayName}`)
    handRef.once('value', snap => {
      if(!snap.val()){
        handRef.set(["cards"])
        this.initiateMatchListener();
      }
      else{
        this.initiateMatchListener();
      }
    });
  };

  initiateMatchListener = () => {
    firebase.database().ref().child('games').child(this.state.code).on('value', snap => {
      let gameState = snap.val()
      let newState = this.state

      console.log("This is a printout of the game snapshot from firebase");
      console.log(gameState);

      newState.game = gameState

      this.setState(newState);
    });
  }

  drawCard = pile => {
    if(this.state.game[pile].length < 2){return};
    click++
    let newState = this.state;
    let message = this.state;
    let name = this.props.user.displayName;

    let yourNewCard = newState.game[pile].splice(-1,1);

    for(var i=0; i < yourNewCard.length; i++){
      newState.game.hands[name].push(yourNewCard[i]);
    };
      
    firebase.database().ref().child('games').child(this.props.code).set(newState.game);
    this.setState(newState);
    this.state.message = name + " " + "drew a card (" + click + ")."
  };

  discard = pile => {
    let message = this.state.message
    let newState = this.state
    let name = this.props.user.displayName;
    let indexes = newState.activeCardIndexes;
    if(this.state.game.hands[name].length < 2){return};

    //uncomment this for loop when activating cards is working correctly
    // for(var i=0; i < indexes.length; i++){
    //   newState.game[pile].push(newState.game.hands[name].splice(indexes[i], 1)[0]);
    // };

    newState.game[pile].push(newState.game.hands[name].splice(-1, 1)[0]);
    
    firebase.database().ref().child('games').child(this.props.code).set(newState.game)
    this.setState(newState);
    this.state.message = name + " " + "discarded.";
  };

  //parameters do nothing yet hopefully they can be used later for adding options to what gets shuffled
  shuffle = (pile, cards) => {
    let newState = this.state;
    let name = this.props.user.displayName;
    //empty discard pile
    newState.game.DiscardPile = ["cards"];

    //empty all players hands
    for(var player in newState.game.hands){
      newState.game.hands[player] = ["cards"];
    }

    //generate a new cardPile by copying and shuffling allCards 
    newState.game.cardPile = ["cards"].concat(shuffleArray(newState.game.allCards));

    //update firebase and set state
    firebase.database().ref().child('games').child(this.props.code).set(newState.game)
    this.setState(newState);
    this.state.message = name + " " + "shuffled the deck.";
  }

  activateCard = (index, action) => {
    if(action === 'activate'){
      this.state.activeCardIndexes.push(index)
    }
    else if(action === 'deactivate'){
      let delIndex = this.state.activeCardIndexes.indexOf(index)
      this.state.activeCardIndexes.splice(delIndex, 1);
    }
  }

	handleBackClick = () => {
    let name = this.props.user.displayName;
    this.props.renderNewComponent("home", {});
    this.state.message = name + " " + " left the game.";
  }

	render() {
		return (
			<Container className="card-container">
			  <Button className="back" onClick={this.handleBackClick}/>
            <div className="message-div">
                 {this.state.message}
            </div>
        <h2 className="game-title">{this.state.name}</h2>
        <h5 className="game-players">{this.props.user.displayName}</h5>
        {this.state.game 
        ?
          <Row>

            <CardPile cards={this.state.game.cardPile}/>
            <DiscardPile cards={this.state.game.discardPile}/> 
            <PlayingCards hand={this.state.game.hands[this.props.user.displayName]} activate={this.activateCard}/>

            <GameButtons draw={this.drawCard} discard={this.discard} shuffle={this.shuffle}/>
          </Row>
        :
          null
        }
			</Container>
		);
	};
};

export default Game;