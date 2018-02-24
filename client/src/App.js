import React, {Component} from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
//import Discover from "./pages/Discover";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";
// import ClassicDeck from "./components/ClassicDeck";
// import Roulette from "./components/Roulette";
import Navbar from "./components/Navbar";
import DeckMake from "./components/DeckMake";
import CardMake from "./components/CardMake";
import firebase from './firebase';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    firebase.auth().currentUser
    ? <Component {...props} />
    : <Redirect to='/'/>
  )} />
)

class App extends Component {
  state = {
    newDeck: {
      deckName: "",
      numCards: "",
      numFields: "",
      createdBy: "",
      handSize: "",
      allCards: {},
      cardArr: [],
      fieldArr: []
    }
    
  }

  addNewDeck = (data) => {

    console.log("if the data is coming in from the DeckMake, it should show below this line:");
    console.log(data);

    this.setState({
      newdeck: {
        deckName: data.deckName,
        numCards: data.numCards,
        numFields: data.numFields,
        createdBy: data.createdBy,
        handSize: data.handSize,
      }
    });

    console.log("if the data is coming in from this(dot)state(dot)newdeck, it should show below this line:");
    console.log(this.state.newDeck);

  }

  passDeckInfo = () => {
    let passDeck = this.state.newDeck;
  }

  render(){
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route exact path="/play" component={About} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/deckmake" render={()=><DeckMake addNewDeck={this.addNewDeck}/>} /> 
            <Route exact path="/cardmake" render={()=><CardMake passDeckInfo={this.passDeckInfo}/>} />
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
