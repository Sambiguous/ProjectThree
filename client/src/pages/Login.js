import React, { Component } from "react";
import Container from "../components/Container";

class Login extends Component {
  state = {
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
        <h1 className="text-center">Login page</h1>

      </Container>
    );
  }
}

export default Login;
