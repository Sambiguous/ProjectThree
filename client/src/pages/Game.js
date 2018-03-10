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
import PlayerList from "../components/PlayerList";

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
      isActive: null
    };
  };

  componentDidMount(){
    connectToGame(this.props.code, this.props.user.displayName, gameResponse => {
      let newState = this.state;
      newState.isActive = this.props.user.displayName === gameResponse.active;

      newState.game = gameResponse
      console.log(newState);
      this.setState(newState);
    });
  };

  deal = numCards => {
    let newState = this.state
    const players = newState.game.players

    //for every card we want to deal
    for(var i=0; i < numCards; i++){

      //for each player in the game
      for(var k=0; k < players.length; k++){

        //if there are cards still in the cardPile from which we are dealing
        if(newState.game.cardPile.length > 1){

          //take a card off the top of the card pile and append it to that players hane
          let newCard = newState.game.cardPile.splice(-1,1);
          newState.game.hands[players[k]].push(newCard[0]);
        };
      };
    };

    firebase.database().ref().child('games').child(this.props.code).set(newState.game);
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
    firebase.database().ref().child('games').child(this.props.code).set(newState.game)
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
    newState.game.message = name + " shuffled."
    //update firebase and set state
    firebase.database().ref().child('games').child(this.props.code).set(newState.game)
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
    if(this.state.isActive){
      this.done(this.state.game.direction);
    }
    leaveGame(this.props.code, name);
    newState.game.message = name + " left the game."
    this.props.renderNewComponent("home", {});
    this.setState(newState);
  }

	render() {
    const username = this.props.user.displayName

		return (
      this.state.isActive !== null && this.state.game.hands[username] && (this.state.game.players.indexOf(username) !== -1)
      ?
        <Container className="card-container">
          <Button className="back" onClick={this.handleBackClick}/>
            <div className="message-div message-div-media">
              {this.state.game.message}
            </div>
          <h2 className="game-title">{this.state.name}</h2>
          <h6 className="game-code">Game Code: {this.state.code}</h6>

          {/*<h6 className="game-players">{username}</h6>*/}
          <Row>
            <CardPile cards={this.state.game.cardPile} deal={this.deal} canDeal={this.state.game.GM === username} isActive={this.state.isActive}/>
            {/*<DiscardPile cards={this.state.game.discardPile}/> */}
            <PlayingCards hand={this.state.game.hands[username]} activate={this.activateCard}/>
            <GameButtons isActive={this.state.isActive} draw={this.drawCard} discard={this.discard} shuffle={this.shuffle} done={this.done}/>
            <PlayerList username={username} players={this.state.game.players} active={this.state.game.active} />
            <ActiveBar isActive={this.state.isActive} />

          </Row>
        </Container>
      :
        null
    );
  };
};

export default Game;