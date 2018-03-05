import React, {Component} from "react";
import "./GameButtons.css"

class GameButtons extends Component {

  	handleShuffle = () => {
      if(this.props.isActive || this.props.isGM){
        this.props.shuffle("lol", "test");
      };
  	};

  	handleDone = () => {
      if(this.props.isActive){
        this.props.done();
      };
  	};

  	handleDiscard = () => {
      if(this.props.isActive){
        this.props.discard('discardPile');
      };
  	};

  	handleDraw = (props) => {
      if(this.props.isActive){
        this.props.draw("cardPile");
      };
  	};

	render() {
		return (
			<div className="btn-div">
				<button className="shuffle-btn" onClick={this.handleShuffle}> SHUFFLE </button>
				<button className="done-btn" onClick={this.handleDone}> DONE </button>
				<button className="discard-btn" onClick={this.handleDiscard}> DISCARD </button>
				<button className="draw-btn" onClick={this.handleDraw}> DRAW </button>
			</div>
		);
	};
};

export default GameButtons;