import React, {Component} from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";
// import ClassicDeck from "./components/ClassicDeck";
// import Roulette from "./components/Roulette";
import Navbar from "./components/Navbar";
import Deck from "./components/Deck";
import firebase from './firebase';

const isAuthed = () => {
  console.log(firebase.auth.Auth.currentUser)
  return firebase.auth.Auth.currentUser !== null
}

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={(props) => (
    isAuthed()
    ? <Component {...props} />
    : <Redirect to='/'/>
  )} />
)

class App extends Component {

  render(){
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <PrivateRoute exact path="/play" component={About} />
            <PrivateRoute exact path="/game" component={Game} />
            <PrivateRoute exact path="/deck" component={Deck} />
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
