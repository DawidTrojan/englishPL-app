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
import { Container, Row } from "react-bootstrap";
const App = () => {
  return (
    <Router>
      <Container>
        <Row className="justify-content-md-left">
          <Header />
        </Row>
        <Container>
          <Row className="justify-content-md-center">
            <Standings />
          </Row>
          <Row className="justify-content-md-center">
            <Scorers />
          </Row>
          <Row className="justify-content-md-center">
            <Fixtures />
          </Row>
        </Container>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
