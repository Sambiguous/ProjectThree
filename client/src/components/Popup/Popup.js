import React, {Component} from "react";
import "./Popup.css";

class Popup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards: props.cardPile,
      showPopup: false,
      dealvalue: ""
    }
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <form className="deal-form">
           How many cards?
              <input 
              type="text" 
              className="deal-input" 
              placeholder="..."
              onChange={this.handleInputChange} 
              dealvalue={this.state.dealvalue} 
              />
              <button 
              type="submit"
              className="deal-btn"
              id="dealBtn"
              onClick={this.props.closePopup}>DEAL</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;

