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


  render() {
    return (
      <div>
      <Container className="nav-container">

      <Row>
      <Col size="sm-12">
        <Navbar class="nav nav-tabs" light expand="md">
            <Nav className="nav" navbar>
              <Nav class="nav nav-tabs">
                <button id="play"><a href="/">Play</a></button>
                <button id="create"><a href="/">Create</a></button>
                <hr />
              </Nav>
            </Nav>
        </Navbar>

        </Col>
        </Row>
        </Container>
      </div>
    );
  }
}