import React, { Component } from "react";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";


class Login extends Component {
  state = {
  };

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <img src={require("../onDeckLogo.png")} alt="onDeck logo" />
          <LoginForm />
      </Container>
    );
  }
}

export default Login;
