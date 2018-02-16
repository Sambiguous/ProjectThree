import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./Game.css";
//import PlayGame from "./components/PlayGame";


class Game extends Component {
	constructor(props) {
    	super(props);
    	this.toggle = this.toggle.bind(this);
    	this.state = { collapse: false };
  	}

  	toggle() {
    	this.setState({ collapse: !this.state.collapse });
  	}

  render() {
  	return (
  		<div>
        	<Button className="game" onClick={this.toggle}> Classic Deck</Button>
        	<Collapse isOpen={this.state.collapse}>
            	<h1> yo </h1>
        	</Collapse>
      	</div>
  	)
  }

}

export default Game; 