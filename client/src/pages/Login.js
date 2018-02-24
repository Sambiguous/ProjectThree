import React, { Component } from "react";
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

      componentDidMount = () => {
        console.log("login mounted");
      }

  render() {
    return (
      <Container style={{ minHeight: "80%" }}>
          <img className="logo-image" alt="" id="logo" src={require("../onDeckLogo.png")} />
          <h1>{this.props.test}</h1>
          <LoginForm {...this.props}/>
          <SignupForm {...this.props}/>
      </Container>
    );
  }
}

export default Login;
