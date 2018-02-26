import "./SoloCardInfo.css";
import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";


var cardArr = [];
var fieldArr = [];

const arrOfValues = [];

function makeCardArr(number){

    for (var i=0; i<number; i++) {
      console.log(`card to be entered` + [i]);
      cardArr.push(i);
    }
    console.log(cardArr);
}

class SoloCardInfo extends Component {
  // Setting the component's initial state
  constructor (props) {
    super (props)
  
    this.state = {numFields: props.numFields}
  }

  componentDidMount() {
    console.log(this.state);
  }


  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFieldSubmit = event => {
    event.preventDefault();

    const pushInfo = this.state.fieldArr;
    console.log(pushInfo);
    
    arrOfValues.push(pushInfo);

    console.log(arrOfValues);

  }

  render() {

    let inputs = [];
    for (var i=0; i<this.state.numFields; i++) {
      inputs.push(
        <div key={i}>
          <input
            value={this.state.fieldArr}
            name={"fieldArr" + i}
            onChange={this.handleInputChange}
            type="text"
            className="deck"
            placeholder="info"
          />
          <button onClick={this.handleFieldSubmit}>add info</button>
        </div> 
      );
    }
  
    return (
      <Row>
        <Col size="sm-12">
        {inputs}
        {/* <button onClick={this.handleFieldSubmit}>add info</button> */}
        </Col>
      </Row>

    )
  }
};

export default SoloCardInfo;
