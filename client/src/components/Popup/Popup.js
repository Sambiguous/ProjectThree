import React, {Component} from "react";
import "./Popup.css";

class Popup extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      cards: props.cardPile,
      showPopup: false,
      value: ""
    }
  }

  render() {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <h1>{this.props.text}</h1>
          <form className="deal-form">
           How many cards?
              <input type="text" className="dealy" placeholder="..."></input>
              <button type="submit" value={this.state.submit} onClick={this.props.closePopup}>DEAL</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;

