import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Wrapper from "./components/Wrapper";
import ClassicDeck from "./components/ClassicDeck";
import Roulette from "./components/Roulette";
import Navbar from "./components/Navbar";
import Deck from "./components/Deck";

class App extends Component {

  render(){
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Login} />
            <Route exact path="/play" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/deck" component={Deck} />
          </Wrapper>
        </div>
      </Router>
    )
  }
}

export default App;
