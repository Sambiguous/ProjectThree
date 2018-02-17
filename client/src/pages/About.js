import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Game from "../components/Game";
import Roulette from "../components/Roulette";


class About extends Component {
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
        <h1>Pick a deck</h1>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <div>
                <Game />
              </div>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <div>
                <Roulette />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;
