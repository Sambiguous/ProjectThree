import React, {Component} from "react";
import "./DiscardPile.css"

class DiscardPile extends Component {

	state = {

	}

	render() {
		return (
			<div>
				<div className="discard-pile">
					<h4> {this.state.discardPile}</h4>
				</div>
			</div>
		)
	}
}

export default DiscardPile;