import React, { Component } from "react";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";


class Login extends Component {
  state = {
  };

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>

        <img className="image" src={require("../onDeckLogo.png")} alt="onDeck logo" />
          <LoginForm />
          <SignupForm />
      </Container>
    );
  }
}

export default Login;
