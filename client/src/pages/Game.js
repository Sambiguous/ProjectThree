import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DiscardPile from "../components/DiscardPile";
import CardPile from "../components/CardPile";
import PlayingCards from "../components/PlayingCards";
import "./Game.css"; 

class Game extends Component {

<<<<<<< HEAD


	constructor(props) {
		super(props)
		this.state = {
=======
	constructor(props) {

		super(props)
			this.state = {
>>>>>>> 714cad14f74c5aed7a8fa27d103960bb77d4e098
			code: "12345",
			name: "Roulette",
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

	render() {
		return (
			<Container className="card-container">
			<h1 className="game-title"> {this.state.name}</h1>
			<h4 className="game-players">{this.state.players[0]} </h4>
				<Row>
<<<<<<< HEAD
					<Col size="sm-6">
						<LeftPanel />
					</Col>
					<Col size="sm-6">
						<RightPanel />
					</Col>
=======
					<CardPile />
					<DiscardPile />
					<PlayingCards />
>>>>>>> 714cad14f74c5aed7a8fa27d103960bb77d4e098
				</Row>
			</Container>		
		);
	}

}

export default Game;
