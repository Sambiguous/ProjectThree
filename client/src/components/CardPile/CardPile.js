import React, {Component} from "react";
import "./CardPile.css";

class CardPile extends Component {

	constructor(props){
		super(props);
		this.state = {
      cards: props.cardPile
    }
  }
  
  handleClick = () => {
    if(!this.props.canDeal){return};
    let deal = prompt("how many?")
  	if (deal == null || deal == "") {
        let num = 0;
    } else {
        let num = deal;
    }
    this.props.deal(deal);
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