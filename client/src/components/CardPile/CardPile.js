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

    if(!this.props.canDeal || !this.props.isActive){return};
    console.log(this.props.value);
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

	render() {
		return (
      this.props.shouldRender
      ?
			<div>
				<div className="card-pile" onClick={this.togglePopup}>
					{/*<h5>{this.state.cards.cardPile.length}</h5>*/}
				</div>
        {this.state.showPopup ? 
          <Popup deal={this.props.deal} togglePopup={this.togglePopup}/>
          : null
        }
			</div>
      :
      null
		)
	}
}

export default CardPile;