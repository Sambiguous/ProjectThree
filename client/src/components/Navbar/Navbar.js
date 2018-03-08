import React from 'react';
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./Navbar.css";
import {
  Navbar,
  Nav } from 'reactstrap';

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
    this.props.renderNewComponent("home", {});
  }

  handleCreateClick = () => {
    this.props.renderNewComponent('deckmake', {})
  }

 render() {
    return (
      <div>
        <Container className="nav-container">
          <Row>
            <Col size="sm-12">
              <Navbar className="nav nav-tabs" light expand="md">
                <Nav className= "nav" navbar>
                  <ul className="nav nav-tabs">

                    <button id="play" onClick={this.handlePlayClick}>Play</button>
                    <button id="prototye" onClick={this.handleCreateClick}>Prototype</button>
                    
                    <hr />

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