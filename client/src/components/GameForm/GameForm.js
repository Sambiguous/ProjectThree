import React, { Component } from "react";
import Wrapper from "../Wrapper";
import { Link } from "react-router-dom";
import Game from "../../pages/Game";
import firebase from '../../firebase';
import "./GameForm.css";

class GameForm extends Component {

  constructor(props){
    super(props);
    this.state = {
      code: "",
      foundGame: false
    }
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    //limit the gamecode input to 5 characters
    if(name === 'code'){
      this.setState({[name]: value.length < 6 ? value : value.slice(0, 5)})
      return;
    }
    this.setState({[name]: value});
  };

  handlePlay = event => {
    event.preventDefault();

    const code = this.state.code;

    if(code.length < 5){
      console.log('game code too short');
      return;
    }

    this.props.connectToGame(code);
  };

  handleCreate = event => {
    event.preventDefault();
  }

  render() {
    return (
      
      <form className="gameform">
        <div className="form-group">
          <h3>Join a game</h3>
          <input
            type="text"
            value={this.state.code}
            className="form-control"
            onChange={this.handleInputChange}
            placeholder="GAME CODE"
            name="code"
            id="joingame-input"
          />

          <button
            type="submit"
            className="join-btn"
            id="join-btn"
            onClick={this.handlePlay}
          >
            Play
          </button>

          <h3> Start a new game </h3>
          <input
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            placeholder="# OF PLAYERS"
            id="startgame-input"
          />
          <input
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            placeholder="PASSWORD"
            id="password-input"
          />
          <button
            type="submit"
            className="start-btn"
            id="start-btn"
            onClick={this.handleFormSubmit}
          >
            Create
          </button>
        </div>
      </form>
    )
  }
}

export default GameForm;