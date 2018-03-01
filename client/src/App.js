import React, {Component} from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import DeckMake from "./pages/DeckMake";
import CardMake from "./pages/CardMake";
//import Deck from "./components/Deck";
import firebase, {login, logout, findGame}from './firebase';

const universalProps = {
  test: "hello",
  login: login,
  logout: logout,
  findGame: findGame
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      propsToRenderedComponent: universalProps,
      auth: props.auth,
      componentToRender: Home,
      newDeck: {}
    };
  };

  //------pretty sure this method is unused, will delete once I'm sure.   -Sam------
  //===========================================================================================================
  // addNewDeck = (data) => {
  //   console.log("if the data is coming in from the DeckMake, it should show below this line:");
  //   console.log(data);
  //   this.setState({newDeck: data});
  //   console.log("if the data is coming in from this(dot)state(dot)newdeck, it should show below this line:");
  //   console.log(this.state);
  // }
  //============================================================================================================

  renderNewComponent = (component, props) =>{

    let newState = this.state;
    newState.componentToRender = this.CompFrmStr(component);
    newState.propsToRenderedComponent = Object.assign(props, universalProps);
    newState.auth = firebase.auth().currentUser

    this.setState(newState);
  };

  CompFrmStr = compName => {
    switch(compName.toLowerCase()){
      case "login":
        return Login;
      
      case "home":
        return Home;

      case "deckmake":
        return DeckMake;

      case "cardmake":
        return CardMake;

      case "game":
        return Game;
    };
  };

  render(){
    return(
    this.state.auth
    ? <Wrapper>
        <Navbar {...this.state.propsToRenderedComponent} renderNewComponent={this.renderNewComponent}/>
        <this.state.componentToRender {...this.state.propsToRenderedComponent} renderNewComponent={this.renderNewComponent} user={this.state.auth}/>
      </Wrapper>
    : <Login {...this.state.propsToRenderedComponent} renderNewComponent={this.renderNewComponent}/>
    )
  };
};


export default App;
