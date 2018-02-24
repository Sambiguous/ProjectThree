import React, {Component} from "react";
import "./CardPile.css";

class CardPile extends Component {


	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}

  	handleClick() {
    	console.log('Click happened');
  	}

	state = {

	}

	render() {
		return (
			<div>
				<div className="card-pile" onClick={this.handleClick}>
					<h4> Card Pile </h4>
				</div>
			</div>
		)
	}
}

export default CardPile;