import React from "react";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

import { Link } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navbar navbar-reverse">
          <NavbarToggler className="navbar-toggler-right" src={require("../../spade.jpeg")} onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link id="home" to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link id="play" to="/play">Play a Game</Link>
                </NavItem>
                <NavItem>
                  <Link id="deck" to="/deckmake">Create a Deck</Link>
                </NavItem>
                <NavItem>
                  <Link id="game" to="/game">Game</Link>
                </NavItem>

              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}