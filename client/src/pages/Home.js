import React, { Component } from 'react';
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import DeckPanel from "../components/DeckPanel";
import "../index.css"
import { Button } from 'reactstrap';
import axios from "axios";

class About extends Component {
      constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }

      componentDidMount(){
        axios.get("/api/decks").then(response => {
          let newState = this.state
          newState.deckNames = response.data;
          this.setState(newState);
        });
      };

      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }

      handleLogout = () => {
        this.props.logout(response => {
          if(response.status === "success"){
            this.props.renderNewComponent("login", {});
          };
        });
      };
    
      render(){
        let decks;
        this.state.deckNames
        ? decks = this.state.deckNames.map((name, index) => <DeckPanel {...this.props} key={index} deckName={name} />)
        : decks = 'nothing here yet'
    
        return (
          <div>
            <h1>PICK A DECK</h1>
            <button 
            onClick={this.handleLogout}
            >logout</button>
            <Container style={{ marginTop: 30 }}>
              {decks}
            </Container>
          </div>
        )
      };

};

export default About;
