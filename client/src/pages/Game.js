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

class Game extends Component {

	constructor(props) {
		super(props)

		this.state = {
			code: "12345",
			name: "USSR jest",
			isActive: true,
			players: ["FloridaMan", "Normie", "NutBar", "SamBiguous"],
			allCards: [  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["bullet"]
			  },
			],
			discardPile: [{
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["No bullet"]
			  },
			  {
				fromDeck: "USSR jest",
				fieldInfo: ["bullet"]
			  },],
			hand:[]
		}
	}

	handleBackClick = () => {
    	this.props.renderNewComponent("home", {});
  	}

	render() {


// things we need to add... 

	if ({/* user not host */}){
		{/* user will get the game code to enter.*/}
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
					<DiscardPile /> 
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
