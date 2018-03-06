import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import DiscardPile from "../components/DiscardPile";
import CardPile from "../components/CardPile";
import ActiveBar from "../components/ActiveBar";
import PlayingCards from "../components/PlayingCards";
import "./Game.css"; 
import GameButtons from "../components/GameButtons";
import { Button} from 'reactstrap';
import firebase, { leaveGame, connectToGame } from '../firebase';

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
      code: props.code,
      activeCardIndexes: [],
      message: ''
    };
  };

  componentDidMount(){
    connectToGame(this.props.code, this.props.user.displayName, gameResponse => {
      let newState = this.state;
      newState.game = gameResponse
      this.setState(newState);
    });
  };

  done = () => {
    let newState = this.state;
    let newActiveIndex;
    const currentActiveIndex = newState.game.players.indexOf(newState.game.active);

    if(this.state.game.direction === "forward"){
      newActiveIndex = (currentActiveIndex + 1) % newState.game.players.length;
    } else {
      newActiveIndex = currentActiveIndex === 0 ? newState.game.players.length - 1 : currentActiveIndex - 1;
    }
    newState.game.active = newState.game.players[newActiveIndex];
    firebase.database().ref().child('games').child(this.props.code).set(newState.game);
    this.setState(newState);
  }

  drawCard = pile => {
    if(this.state.game[pile].length < 2){return};
    let newState = this.state;
    let name = this.props.user.displayName;

    let yourNewCard = newState.game[pile].splice(-1,1);

    for(var i=0; i < yourNewCard.length; i++){
      newState.game.hands[name].push(yourNewCard[i]);
    };
    newState.game.message = name + " drew a card."
    firebase.database().ref().child('games').child(this.props.code).set(newState.game);
    this.setState(newState);
  };

  discard = pile => {
    let newState = this.state
    let name = this.props.user.displayName;
    //let indexes = newState.activeCardIndexes;
    if(this.state.game.hands[name].length < 2){return};

    //uncomment this for loop when activating cards is working correctly
    // for(var i=0; i < indexes.length; i++){
    //   newState.game[pile].push(newState.game.hands[name].splice(indexes[i], 1)[0]);
    // };

    newState.game[pile].push(newState.game.hands[name].splice(-1, 1)[0]);
    newState.game.message = name + " discarded."
    console.log(newState);
    firebase.database().ref().child('games').child(this.props.code).set(newState.game)
    this.setState(newState);
  };

  //parameters do nothing yet hopefully they can be used later for adding options to what gets shuffled
  shuffle = (pile, cards) => {
    let newState = this.state;
    let name = this.props.user.displayName;
    //empty discard pile
    newState.game.DiscardPile = ["cards"];

    //empty all players' hands
    for(var player in newState.game.hands){
      newState.game.hands[player] = ["cards"];
    }

    //generate a new cardPile by copying and shuffling allCards 
    newState.game.cardPile = ["cards"].concat(shuffleArray(newState.game.allCards));
    newState.game.message = name + " shuffled the deck"
    //update firebase and set state
    firebase.database().ref().child('games').child(this.props.code).set(newState.game)
    this.setState(newState);
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
    let newState = this.state;
    const name = this.props.user.displayName;
    leaveGame(this.props.code, name);
    newState.game.message = name + " left the game."
    this.props.renderNewComponent("home", {});
  }

  render() {
    let isActive;
    if(this.state.game && this.state.game.hands[this.props.user.displayName]){
      isActive = this.state.game.active === this.props.user.displayName;
    };
    console.log(isActive);

    return (
      isActive !== undefined
      ?
        <Container className="card-container">
          <Button className="back" onClick={this.handleBackClick}/>
            <div className="message-div">
              {this.state.game.message}
            </div>
          <h2 className="game-title">{this.state.name}</h2>
          <h6 className="game-players">{this.props.user.displayName}</h6>
          <Row>
            <CardPile cards={this.state.game.cardPile}/>
            <DiscardPile cards={this.state.game.discardPile}/> 
            <PlayingCards hand={this.state.game.hands[this.props.user.displayName]} activate={this.activateCard}/>
            <GameButtons isActive={isActive} draw={this.drawCard} discard={this.discard} shuffle={this.shuffle} done={this.done}/>
            <ActiveBar isActive={isActive} />
          </Row>
        </Container>
      :
        null
    );
  };
};

export default Game;