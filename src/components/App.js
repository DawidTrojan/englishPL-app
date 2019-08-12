import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <Router>
      <Header />
      <Switch />
      <Footer />
    </Router>
  );
};

export default App;
