import React, {Component} from "react";
import "./Popup.css";

class Popup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showPopup: false,
      numCardsToDeal: ""
    }
  }

  handleDeal = () => {
    const numCards = parseInt(this.state.numCardsToDeal)
    this.props.togglePopup()
    this.props.deal(numCards);
  }

  handleInputChange = event => {
    const {name, value} = event.target
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <form className="deal-form">
           How many cards?
              <input 
              value={this.state.numCardsToDeal} 
              type="text" 
              className="dealy" 
              placeholder="..." 
              onChange={this.handleInputChange}
              name="numCardsToDeal">
              </input>
              <button type="submit" onClick={this.handleDeal}>DEAL</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;

