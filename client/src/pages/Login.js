import React, { Component } from "react";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";


class Login extends Component {
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
        <Container style={{ marginTop: 30 }}>
        <img className="image" src={require("../onDeckLogo.png")} />

          <Row>
            <Col size="md-12">
              <div>
                <LoginForm />
              </div>
            </Col>
          </Row>

          <Row>
            <Col size="md-12">
              <div>
                <SignupForm />
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}

export default Login;
