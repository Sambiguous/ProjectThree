import React, { Component } from 'react';
import { Collapse, Button} from 'reactstrap';
import "./Roulette.css";
import GameForm from "../GameForm";


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
        	<Button className="roulette" onClick={this.toggle}> Roulette</Button>
        	<Collapse isOpen={this.state.collapse}>
            	<GameForm />
        	</Collapse>
      </div>
  	)
  }
}

export default Roulette; 