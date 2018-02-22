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
import Deck from "./components/Deck";
import firebase from './firebase';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    firebase.auth().currentUser
    ? <Component {...props} />
    : <Redirect to='/'/>
  )} />
)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      gameCode:""
    }
  }

  connectToGame = code => {
    firebase.database().ref().child('games').child(code).once('value', snap => {
      const game = snap.val()
      if(!game){
        console.log("no game was found with that password");
        return;
      };
      if(Object.keys(game.players).length < game.maxPlayers){
        firebase.database().ref().child('games').child(code).child('players').push(firebase.auth().currentUser.displayName, e => {
          if(e){
            console.log("an error occured trying to join the match");
          }else{
            this.setState({gameCode: code});
          };
        });
      };
    });
  };

  createGame = (code, gameObject) => {
    //this is gonna be tough
    //firebase.database().ref().child('games').child(code).set(game)
  }


  render(){
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route exact path="/play" render={() => <About connectToGame={this.connectToGame} /> }/>
            <Route exact path="/deck" component={Deck} />
            <Route exact path="/game" render={Game} />
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
