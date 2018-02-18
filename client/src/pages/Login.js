import React, { Component } from "react";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";


class Login extends Component {
  state = {
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <img class="image" src={require("../onDeckLogo.png")} />
          <LoginForm />
          <SignupForm />
      </Container>
    );
  }
}

export default Login;
