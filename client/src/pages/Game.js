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
      name: "placeholder",
      players: "friends!"
    }
		}
  
  
  componentDidMount(){
    const code = this.props.code
    console.log(this.props);
    firebase.database().ref().child('games').child(code).on('value', snap => {
      let game = snap.val()
      let state = {
        code: code,
        game: game
      }

      this.setState(state);

    })
  }

	  handleBackClick = () => {
    		this.props.renderNewComponent("home", {});
  		}

	render() {

	if ({/* username*/}) {
		
	}
		return (
			<Container className="card-container">
			<Button className="back" onClick={this.handleBackClick}></Button>
			{/* this will handle the current game being played */}
			<h2 className="game-title"> {this.state.name}</h2>
			{/* this handles the current player */}
			<h5 className="game-players">{this.state.players[0]}</h5>
				<Row>
					<CardPile />
					<DiscardPile  /> 
					<PlayingCards />
					<GameButtons />
				</Row>
				<Row>
				<ActiveBar />
				</Row>
			</Container>
		);
	}

}

export default Game;
