import React, {Component} from "react";
import "./PlayerList.css";

class PlayerList extends Component {

	constructor(props) {
	    super(props)
	    this.state = {
	    	code: props.code,
	      	isActive: null
	    };
  };
  
  yourNameFirst = listOfPlayers => {
    let index = listOfPlayers.indexOf(this.props.username)

    let leftOfYou = listOfPlayers.slice(0, index)
    let rightOfYou = listOfPlayers.slice(index)

    return rightOfYou.concat(leftOfYou);
    
  }

	render() {

    let playersInGame = this.yourNameFirst(this.props.players);
    let playerList = [];

    for (let i = 0; i < playersInGame.length; i++){
      if (playersInGame[i] === this.props.active) {
        playerList.push(<span key={i} className="active-user">{playersInGame[i]}</span>)
      } else {
        playerList.push(<span key={i} className="inactive-user">{playersInGame[i]}</span>);
      };
    };
      
    return(
      <div className="user-list">
        {playerList}
      </div>
    )
	}	
}

export default PlayerList;