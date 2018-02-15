import React, { Component } from "react";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";


class Login extends Component {
  state = {
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <img src={require("../onDeckLogo.png")} />
          <LoginForm />
      </Container>
    );
  }
}

export default Login;
