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

  	handleShuffle = () => {
    	console.log('you just shuffled the deck');
    	this.props.shuffle("lol", "test");
  	}

  	handleDone() {
    	console.log('you just clicked Done');
    	//your turn is done - go to the next player
  	}

  	handleDiscard = () => {
    	console.log('you just discarded');
    	this.props.discard('discardPile'); 
  	}

  	handleDraw = (props) => {
      this.props.draw("cardPile");
  	};

	render() {
		return (
			<div className="btn-div">
				<button className="shuffle-btn" onClick={this.handleShuffle}> SHUFFLE </button>
				<button className="done-btn" onClick={this.handleClickDone}> DONE </button>
				<button className="discard-btn" onClick={this.handleDiscard}> DISCARD </button>
				<button className="draw-btn" onClick={this.handleDraw}> DRAW </button>
			</div>
		);
	};
};

export default GameButtons;