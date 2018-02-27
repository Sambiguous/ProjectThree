import React, { Component } from 'react';
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
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

  handlePlayClick = () => {
    this.props.renderNewComponent("game", {});
  }

  render() {
    return (
      <div>
      <Container className="nav-container">

      <Row>
      <Col size="sm-12">
        <Navbar class="nav nav-tabs" light expand="md">
            <Nav className="nav" navbar>
              <ul class="nav nav-tabs">
                <button id="deckmake" onClick={this.handleCreateClick}>Create</button>
                <button id="play" onClick={this.handlePlayClick}>Play</button>
                <button onClick={this.handleLogout}>LOGOUT</button>
              </ul>
            </Nav>
        </Navbar>

        </Col>
        </Row>
        </Container>
      </div>
    );
  }
}