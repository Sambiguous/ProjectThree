import React, { Component } from "react";
import "./GameForm.css";

class GameForm extends Component {
  state = {

  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    

  }

  render() {
    return (
      <form className="gameform">
        <div className="form-group">
          <h2> Join a game</h2>
          <input
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            placeholder="GAME CODE"
            id="joingame-input"
          />

          <button
            type="submit"
            className="join-btn"
            onClick={this.handleFormSubmit}
          >
            Play!
          </button>

          <h2> Start a new game </h2>
          <input
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            placeholder="# of players"
            id="startgame-input"
          />
          <input
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            placeholder="password"
            id="password-input"
          />
          <button
            type="submit"
            className="start-btn"
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