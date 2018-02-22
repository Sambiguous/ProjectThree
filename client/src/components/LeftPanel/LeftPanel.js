import React, {Component} from "react";
import "./LeftPanel.css";
import Container from "../Container";
import Col from "../Col";
import CardPile from "../CardPile";
import DiscardPile from "../DiscardPile";
import Row from "../Row";

class LeftPanel extends Component {

	constructor(props) {
		super(props)
		this.state = {
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
			<Row>
				<Col size="lg-12">
					<div className="left-panel">
						<CardPile> hey </CardPile> <DiscardPile/>
					</div>
				</Col>
			</Row>
			</Container>
		);
	}
}

export default LeftPanel;