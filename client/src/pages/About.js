import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Game from "../components/Game";
import Roulette from "../components/Roulette";

<<<<<<< HEAD
const About = () =>
  <div>
      <h1>Pick a game</h1>
    <Container style={{ marginTop: 30 }}>

      <Row>
        <Col size="md-12">
          <div>
          <Game>
          Classic Deck
          </Game>
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <Game>
          Cards against humanity
          </Game>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <div>
          <Game>
          Apples to Apples
          </Game>
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="md-12">
          <Game>
          UNO
          </Game>
        </Col>
      </Row>

    </Container>
  </div>;
=======
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
          <h1>Pick a game</h1>
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


 
>>>>>>> 646097289686897589e38aa9e0a88d76075d78b2

export default About;
