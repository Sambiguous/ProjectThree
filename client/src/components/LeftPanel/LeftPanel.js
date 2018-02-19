import React, {Component} from "react";
import "./LeftPanel.css";
import Container from "../Container";
import CardPile from "../CardPile";
import DiscardPile from "../DiscardPile";
import Row from "../Row";

class LeftPanel extends Component {


	render() {
		return (
			<Container >
				<div className="left-panel">
					<CardPile />
					<DiscardPile />
				</div>
			</Container>
		);
	}
}

export default LeftPanel;