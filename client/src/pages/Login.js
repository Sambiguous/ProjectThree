import React, { Component } from "react";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import Row from "../components/Row";
import Col from "../components/Col";
import { Collapse, Button} from 'reactstrap';
import "../index.css";


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
          {/*<h1>{this.props.test}</h1>*/}
          <Row>
            <Col size="md-12">
                <Button className="signin" onClick={this.toggle}>Sign In</Button>
                <Button className="signup" onClick={this.toggle}>Sign Up</Button>
                <hr />
                      <LoginForm {...this.props}/>
                    <Collapse isOpen={this.state.collapse}>
                      <SignupForm {...this.props}/>
                  </Collapse>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default Login;
