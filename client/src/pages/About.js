import React, { Component } from 'react';
import { Button, CardBody, Card } from 'reactstrap';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import ClassicDeck from "../components/ClassicDeck";
import Roulette from "../components/Roulette";
import CardsAgainst from "../components/CardsAgainst";

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
        <h1>PICK A DECK</h1>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <div>
                <ClassicDeck />
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

          <Row>
            <Col size="md-12">
              <div>
                <CardsAgainst />
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}

export default About;
