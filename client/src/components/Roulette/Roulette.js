import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./Roulette.css";
import PlayGame from "../PlayGame";


class Roulette extends Component {
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
        	<Button className="game" onClick={this.toggle}> Roulette?</Button>
        	<Collapse isOpen={this.state.collapse}>
            	<PlayGame />
        	</Collapse>
      </div>
  	)
  }
}

export default Roulette; 