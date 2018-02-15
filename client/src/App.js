import React, {Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Game from "./components/Game";
import Navbar from "./components/Navbar";

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
          </Wrapper>
         
        </div>
      </Router>
    )
  }
}


export default App;