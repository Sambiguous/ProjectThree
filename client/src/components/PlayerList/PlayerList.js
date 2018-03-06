import React, {Component} from "react";
import "./PlayerList.css";

class PlayerList extends Component {

	render() {
    	const activeuser = this.props.user.displayName ? 'active-user' : 'inactive-user';

    	for (let i = 0; i < this.state.game.players; i++){
    		console.log(this.props.user.displayName);
    	}

    	return(
    		<div className="user-list">
              PLAYERS: <p className={activeuser}> {this.state.game.players} </p>
            </div>
    	)
	}	
}

export default PlayerList;