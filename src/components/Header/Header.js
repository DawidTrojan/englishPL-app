import React from "react";
import Logo from "./Logo";
import Navigation from "../../containers/Navigation";
import { Container, Row } from "react-bootstrap";

const Header = () => (
  <header>
    <Container>
      <Row className="justify-content-between align-items-center">
        <Logo />
        <Navigation />
      </Row>
    </Container>
  </header>
);

export default Header;
