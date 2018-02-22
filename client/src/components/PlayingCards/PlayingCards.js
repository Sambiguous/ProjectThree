import React, {Component} from "react";
import "./PlayingCards.css";

class PlayingCards extends Component {

	state = {
		allCards: {}


	}
		updatePlaying = event => {
			event.preventDefault();

			//this is where we're pulling hand size in cards
			// set up an object each card gets sent to
		}

	render() {
		const arrayOfStuff = [["A", "Spades"]];
		return (
			<div>
				<div className="playing-cards">
					<div>
			            {(()=>{
			              let container =[];
			              let arr = arrayOfStuff //can be anything array, object 
			              arr.forEach((val,index)=>{
			                container.push(<div key={index}>
			                              <h2>{val[0]}</h2>
			                              <h3>{val[1]}</h3>
			                              </div>)
			                            });
			              return container;     
			            })()}
          			</div>
				</div>
			</div>
		)
	}
}

export default PlayingCards;