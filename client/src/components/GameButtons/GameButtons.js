import React, {Component} from "react";
import "./GameButtons.css"

class GameButtons extends Component {

	constructor(props){
		super(props);
		// this.handleClickShuffle = this.handleClickShuffle.bind(this);
		// this.handleClickDone = this.handleClickDone.bind(this);
		// this.handleClickDiscard = this.handleClickDiscard.bind(this);
		// this.handleClickDraw = this.handleClickDraw.bind(this);

	}

  	handleShuffle() {
    	console.log('you just shuffled the deck');
    	// logic to shuffle deck
  	}

  	handleDone() {
    	console.log('you just clicked Done');
    	//your turn is done - go to the next player
  	}

  	handleDiscard() {
    	console.log('you just discarded');
    	// logic to get rid of your card 
  	}

  	handleDraw = () => {
      console.log('you just drew a card');
      this.props.draw("cardPile")
  	}

	render() {
		return (
			<div className="btn-div">
				<button className="shuffle-btn" onClick={this.handleClickShuffle}> SHUFFLE </button>
				<button className="done-btn" onClick={this.handleClickDone}> DONE </button>
				<button className="discard-btn" onClick={this.handleClickDiscard}> DISCARD </button>
				<button className="draw-btn" onClick={this.handleDraw}> DRAW </button>
			</div>
		);
	};
};

export default GameButtons;