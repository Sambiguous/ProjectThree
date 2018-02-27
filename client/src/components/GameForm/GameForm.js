import React, { Component } from "react";
import "./GameForm.css";

class GameForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      code: "",
      numPlayers: ""
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

    this.props.findGame(code, response =>{
      if(response.status === "success"){
        this.props.renderNewComponent("game", {code: code});
      } else {
        console.log(response);
      }
    });
  };

  render() {
    return (
      <form className="gameform">
        <div className="form-group">
        
          <input
            type="text"
            className="form-control"
            onChange={this.handleInputChange}
            placeholder="# OF PLAYERS"
            id="startgame-input"
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