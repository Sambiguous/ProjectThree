import React, {Component} from "react";
import "./ActiveBar.css";

class ActiveBar extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			isActive: false
		}
	}

	render() {

		if (this.state.isActive == true) {
		{/* change the classname to green css */}
			
		}

		return(
			<div className="active-bar">
			</div>
		)

	}	
}

export default ActiveBar;