import React, { Component } from 'react';
import "./Navbar.css";
import axios from "axios";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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

  handleLogout = () => {
    this.props.logout(response => {
      if(response.status === "success"){
        this.props.renderNewComponent("login", {});
      };
    });
  };

  handleCreateClick = () => {
    this.props.renderNewComponent("deckmake", {});
  }

  render() {
    return (
      <div>
        <Navbar class="nav nav-tabs" light expand="md">
            <Nav className="nav" navbar>
              <ul class="nav nav-tabs">
                <h3 onClick={this.handleCreateClick}>CREATE</h3>
                <button id="play" >Play</button>
                <button onClick={this.handleLogout}>LOGOUT</button>
              </ul>
            </Nav>
        </Navbar>
      </div>
    );
  }
}