import React, {Component} from "react";
import "./PlayingCards.css";

class PlayingCards extends Component {

	state = {

	}

	render() {
		return (
			<div>
				<div className="playing-cards">
					<h4> {this.state.code}</h4>
				</div>
			</div>
		)
	}
}

export default PlayingCards;