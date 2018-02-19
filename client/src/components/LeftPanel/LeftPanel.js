import React, {Component} from "react";
import "./LeftPanel.css";
import Container from "../Container";
import Col from "../Col";
import CardPile from "../CardPile";
import DiscardPile from "../DiscardPile";
import Row from "../Row";

class LeftPanel extends Component {


	render() {
		return (
			<Container className="card-container">
			<Row>
				<Col size="lg-12">
					<div className="left-panel">
						<CardPile /> <DiscardPile />
					</div>
				</Col>
			</Row>
			</Container>
		);
	}
}

export default LeftPanel;