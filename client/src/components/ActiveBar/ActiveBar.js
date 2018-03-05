import React, {Component} from "react";
import "./ActiveBar.css";

class ActiveBar extends Component {

	render() {
    const barClass = this.props.isActive ? 'green-bar' : 'active-bar';

	}	
}

export default ActiveBar;