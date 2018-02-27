import React, {Component} from "react";
import "./PlayingCards.css";

class PlayingCards extends Component {

	constructor(props) {
    	super(props);
    	this.handleClick = this.handleClick.bind(this);
    	this.state = {isToggleOn: false};
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
		let cardArr = [["A", "Spades"], ["2", "Diamonds"],["6", "Hearts"], ["3", "Hearts"], ["4", "Spades"], ["8", "Clubs"]];
		let container = [];
		for (var i=0; i < cardArr; i++) {
			container.push(
			<div key={i} className="playing-card" onClick={this.handleClick}>
        		<h5>{cardArr[0]}</h5>
			    <h5>{cardArr[1]}</h5>
        	</div> 

			)

		}

		return (
			<div>
				<div className="playing-cards">
					<div className="outer-div">
   						<div className="playing-card">
   						{cardArr}
   						</div>
          			</div>
				</div>
			</div>
		)
	}
}

export default PlayingCards;