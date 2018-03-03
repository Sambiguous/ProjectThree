import React, {Component} from "react";
import "./CardPile.css";

class CardPile extends Component {


	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
      cards: props.cardPile
    }

	}


  	handleClick() {
    	console.log('Click happened');
  	}

	render() {
		return (
			<div>
				<div className="card-pile" onClick={this.handleClick}>
					{/*<h5>{this.state.cards.cardPile.length}</h5>*/}
				</div>
			</div>
		)
	}
}

export default CardPile;