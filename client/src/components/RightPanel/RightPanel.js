import React, {Component} from "react";
import "./RightPanel.css";
import Container from "../Container";
import Col from "../Col";
import Row from "../Row";
import PlayingCards from "../PlayingCards";

class RightPanel extends Component {


	render() {
		return (
			<Container className="card-container">
				<div className="right-panel">
				<PlayingCards />
				</div>
			</Container>
		);
	}
}

export default RightPanel;