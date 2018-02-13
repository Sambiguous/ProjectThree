import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";
import Login from "./pages/Login";
import Play from "./pages/Play";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Login} />
        <Route exact path="/play" component={Play} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/game" component={Game} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
