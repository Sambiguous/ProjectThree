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

	render() {

    	for (let i = 0; i < this.props.players.length; i++){
    		if (this.props.username == this.props.isActive) {
    			return <div className="inactive-user"> {this.props.username}</div> 
    		} else {
    			return <div className="active-user"> {this.props.username}</div>
    		}
    	}

    	return(
    		<div className="user-list">
              {this.props.players}
            </div>
    	)
	}	
}

export default PlayerList;