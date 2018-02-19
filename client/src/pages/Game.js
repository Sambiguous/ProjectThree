import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import "./Game.css";


class Game extends Component {

	render() {
		return (
			<Container className="card-container">
				<Row>
					<Col size="sm-4">
						<LeftPanel />
					</Col>
					<Col size="sm-8">
						<RightPanel />
					</Col>
				</Row>
			</Container>		
		);
	}
}

export default Game;