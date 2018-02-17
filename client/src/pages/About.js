import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Game from "../components/Game";

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

export default About;
