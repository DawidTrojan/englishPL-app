import React from "react";
import { Container } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";

const Footer = () => (
  <footer>
    <Container className="footer_container">
      <div className="footer_box">
        <div>
          <span>&copy; English PL 2019 - by Dawid Trojan</span>
        </div>
        <div className="footer_icons">
          <i className="fa fa-linkedin" />
          <i className="fa fa-github" />
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
