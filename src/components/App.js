import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../containers/Main";
import Standings from "../containers/Standings";
import Fixtures from "../containers/Fixtures";
import Scorers from "../containers/Scorers";
import Teams from "../containers/Teams";
import Players from "../containers/Players";
import SignIn from "../containers/SignIn";
import SignUp from "../containers/SignUp";
import Favourites from "../containers/Favourites";
import "../sass/main.scss";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <Teams />
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/standings" component={Standings} />
          <Route path="/fixtures" component={Fixtures} />
          <Route path="/scorers" component={Scorers} />
          <Route path="/players" component={Players} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
