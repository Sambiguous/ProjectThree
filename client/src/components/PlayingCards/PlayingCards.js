import React, {Component} from "react";
import "./PlayingCards.css";

class PlayingCards extends Component {

	constructor(props) {
    	super(props);
    	this.handleClick = this.handleClick.bind(this);
    	this.state = {
    		isToggleOn: false,
			deckName: "",
	    	numCards: "",
	    	numFields: "",
	    	createdBy: "",
	    	handSize: "",
	    	allCards: {},
	    	fieldArr: [],
	    	cardArr: [["A", "Spades"], ["2", "Diamonds"],["6", "Hearts"], ["3", "Hearts"], ["4", "Spades"], ["8", "Clubs"]]

    	};
  	}

  	handleClick() {
    	this.setState(prevState => ({
      		isToggleOn: !prevState.isToggleOn
    	}));
    	console.log("click happened");
  	}	

	state = {
		allCards: {}
	}
	
	updatePlaying = event => {
		event.preventDefault();

		//this is where we're pulling hand size in cards
		// set up an object each card gets sent to
	}

	render() {
		let container = [];
		for (var i=0; i < this.state.cardArr; i++) {
			container.push(
				<div key={i}>
	        		<h5>{this.state.cardArr[0]}</h5>
				    <h5>{this.state.cardArr[1]}</h5>
	        	</div>
			)
		}

		return (
			<div>
				<div className="playing-cards">
					<div className="outer-div">
   						<div className="playing-card">
   							<h5>{this.state.cardArr[0]}</h5>
   						</div>

   						<div className="playing-card">
   							<h5>{this.state.cardArr[1]}</h5>
   						</div>

   						<div className="playing-card">
   						 	<h5>{this.state.cardArr[2]}</h5>
   						</div>

   						<div className="playing-card">
   						 	<h5>{this.state.cardArr[3]}</h5>
   						</div>
   						
          			</div>
				</div>
			</div>
		)
	}
}

export default PlayingCards;