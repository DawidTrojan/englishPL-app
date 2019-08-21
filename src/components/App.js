import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../components/Main";
import Standings from "../containers/Standings";
import Fixtures from "../containers/Fixtures";
import Scorers from "../containers/Scorers";
import "../sass/main.scss";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/Standings" component={Standings} />
          <Route path="/Fixtures" component={Fixtures} />
          <Route path="/Scorers" component={Scorers} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
