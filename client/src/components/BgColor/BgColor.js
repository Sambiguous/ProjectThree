import "./BgColor.css";
import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";


class BgColor extends Component {

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;

    this.props.input(name, value, this.props.index)
  }

  render() {
    let formName = "card" + this.props.index.toString();

    return (
      <form className="deck-form" name={formName}>
        <input name={"bgColor"} onChange={this.handleInputChange} type="text" className="deck" placeholder="Card BG Color"/>
      </form>
    )
  }
};

export default BgColor;
