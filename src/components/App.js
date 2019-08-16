import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "../containers/Main";
import Standings from "../containers/Standings";
import Fixtures from "../containers/Fixtures";
import Scorers from "../containers/Scorers";
import Wrapper from "./Wrapper";
import "../sass/main.scss";

const App = () => {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Standings />
        <Scorers />
        <Fixtures />
      </Wrapper>
      <Footer />
    </Router>
  );
};

export default App;
