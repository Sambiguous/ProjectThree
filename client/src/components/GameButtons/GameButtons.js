import React, {Component} from "react";
import "./GameButtons.css"

class GameButtons extends Component {

	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);

	}

  	handleClick() {
    	console.log('Click happened');
  	}

	render() {
		return (
			<div className="btn-div">
				<button className="shuffle-btn" onClick={this.handleClick}> SHUFFLE </button>
				<button className="draw-btn" onClick={this.handleClick}> DONE </button>
				<button className="discard-btn" onClick={this.handleClick}> DISCARD </button>
				<button className="done-btn" onClick={this.handleClick}> DRAW </button>
			</div>
		)
	}
}

export default GameButtons;