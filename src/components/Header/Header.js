import React from "react";
import Logo from "./Logo";
import Menu from "../../containers/Menu";
import { Container, Row } from "react-bootstrap";

const Header = () => (
  <header>
    <Container>
      <Row className="justify-content-between align-items-center">
        <Logo />
        <Menu />
      </Row>
    </Container>
  </header>
);

export default Header;
