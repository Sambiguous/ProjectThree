import React, {Component} from "react";
import "./PlayingCards.css";

class PlayingCards extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
    		isToggleOn: false,

    	};
  	}

  handleClick = () => {
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }));
    console.log("click happened");
  }	

	render() {

    let cardsInHand = [];

    //iterate over the cards array only if it's length is greater than 1. firebase doesn't  
    //let us store empty arrays, so the cards array always has a dummy element at index 0
    for(var i=1; i < this.props.hand.length; i++){
      let fieldsOnCard = [];
      let numFields = Object.keys(this.props.hand[i]).length;

      for(var k=0; k < numFields; k++){
        let field = "fieldInfo" + k.toString();
        fieldsOnCard.push(<h5>{this.props.hand[i][field]}</h5>);
      };

      cardsInHand.push(<div className="playing-card">{fieldsOnCard}</div>);
    };

		return (
			<div>
				<div className="playing-cards">
					<div className="outer-div">
          {cardsInHand}
   						{/* <div className="playing-card">
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
   						</div> */}
          	</div>
				</div>
			</div>
		)
	}
}

export default PlayingCards;