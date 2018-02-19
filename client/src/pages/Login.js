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
      <Container style={{ minHeight: "80%" }}>
        <img className="image" src={require("../onDeckLogo.png")} />
          <LoginForm />
          <SignupForm />
      </Container>
    );
  }
}

export default Login;
