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

	  handlePlayClick = () => {
    		this.props.renderNewComponent("home", {});
  		}

	render() {

	if ({/* username*/}) {
		
	}
		return (
			<Container className="card-container">
			<Button className="back" onClick={this.handlePlayClick}></Button>
			<h2 className="game-title"> {this.state.name}</h2>
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
