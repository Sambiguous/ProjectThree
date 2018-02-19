import React from "react";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

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
          <NavbarToggler className="navbar-toggler-right" onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink id="home" href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="play" href="/play">Play a Game</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink id="deck" href="/deck">Create a Deck</NavLink>
                </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
