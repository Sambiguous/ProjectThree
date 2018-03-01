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

class Game extends Component {

	constructor(props) {
    super(props)
    
    this.state = {
      game: {
        name: "placeholder",
        players: "friends!",
        cardPile: [],
      }
    }
	}
  
  
  componentDidMount(){
    const code = this.props.code
    firebase.database().ref().child('games').child(code).on('value', snap => {
      let game = snap.val()

      let newGameState = Object.assign(this.state.game, game)

      let state = {
        code: code,
        game: newGameState
      }

      this.setState(state);

    })
  }

  drawCard = pile => {
    if(pile === "cardPile"){
      let newState = this.state
      let yourNewCard = newState.game.cardPile.splice(-1,1)

      console.log(yourNewCard)
      console.log(newState.game.cardPile)

      for(var i=0; i < yourNewCard.length; i++){
        newState.game.hands[this.props.user.displayName].push(yourNewCard[i]);
      }
      firebase.database().ref().child('games').child(this.props.code).set(newState.game)

      this.setState(newState);
    }
  }

	  handleBackClick = () => {
    		this.props.renderNewComponent("home", {});
  		}

	render() {
		return (
			<Container className="card-container">
			<Button className="back" onClick={this.handleBackClick}></Button>
			{/* this will handle the current game being played */}
			<h2 className="game-title"> {this.state.name}</h2>
			{/* this handles the current player */}
			<h5 className="game-players">{this.props.user.displayName}</h5>
				
          {this.state.game.hands 
          ?
            <Row>
              <CardPile cards={this.state.game.cardPile}/>
              <DiscardPile  /> 
              <PlayingCards hand={this.state.game.hands[this.props.user.displayName]}/>
              <GameButtons draw={this.drawCard}/>
            </Row>
          :
            null
          }
				<Row>
				<ActiveBar />
				</Row>
			</Container>
		);
	};
};

export default Game;