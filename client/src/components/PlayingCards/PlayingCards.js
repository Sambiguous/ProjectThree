import React, {Component} from "react";
import "./PlayingCards.css";

class PlayingCards extends Component {

	constructor(props) {
    	super(props);
    }
    

  //Not currently called
  handleClick = event => {
    const index = event.target.dataset.index;
    this.props.activate(index);
  }	

	render() {

    let cardsInHand = [];

    //iterate over the cards array only if it's length is greater than 1. firebase doesn't  
    //let us store empty arrays, so the cards array always has a dummy element at index 0
    for(var i=1; i < this.props.hand.length; i++){
      let fieldsOnCard = [];
      let numFields = Object.keys(this.props.hand[i]).length;
      let bgCLR = {
        backgroundColor: this.props.hand[i].bgColor
        // backgroundColor: "purple"
      }
      const cardClass = this.props.activeIndexes.indexOf(i.toString()) === -1 ? "playing-card" : "playing-card active";


      for(var k=0; k < numFields; k++){
        let field = "fieldInfo" + k.toString();
        fieldsOnCard.push(<h5 key={k}>{this.props.hand[i][field]}</h5>);
      };

      cardsInHand.push(<div key={i} data-index={i} onClick={this.handleClick} className={cardClass} style={bgCLR}>{fieldsOnCard}</div>);
    };

		return (
			<div>
				<div className="playing-cards">
					<div className="outer-div">
            {cardsInHand}
          </div>
				</div>
			</div>
		);
	};
};

export default PlayingCards;
