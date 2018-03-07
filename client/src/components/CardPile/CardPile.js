import React, {Component} from "react";
import "./CardPile.css";
import Popup from "../Popup";

class CardPile extends Component {

	constructor(props){
		super(props);
    this.togglePopup = this.togglePopup.bind(this);
		this.state = {
      cards: props.cardPile,
      showPopup: false
    }
  }
  
  handleClick = () => {
    if(!this.props.canDeal){return};
    let deal = prompt("How many cards would you like to deal?")
  	if (deal == null || deal == "") {
        let num = 0;
    } else {
        let num = deal;
    }
    this.props.deal(deal);
  }

  togglePopup() {
    this.props.deal(this.props.value);
    console.log(this.props.value);
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

	render() {
		return (
			<div>
				<div className="card-pile" onClick={this.togglePopup}>
					{/*<h5>{this.state.cards.cardPile.length}</h5>*/}
				</div>
        {this.state.showPopup ? 
          <Popup
            closePopup={this.togglePopup}

          />
          : null
        }
			</div>
		)
	}
}

export default CardPile;