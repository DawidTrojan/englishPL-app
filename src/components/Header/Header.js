import React from "react";
import Logo from "./Logo";
import { Container, Row, Col } from "react-bootstrap";
const Header = () => (
  <header>
    <Container>
      <div className="header_container">
        <Logo />
        <nav>
          <ul>
            <li>Sign in</li>
            <li>Register</li>
          </ul>
        </nav>
      </div>
    </Container>
  </header>
);

export default Header;
