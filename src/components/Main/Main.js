import React from "react";
import image from "./main.jpg";
import { Container } from "react-bootstrap";
const Main = () => (
  <Container>
    <div className="main_image">
      <img src={image} alt="" />
    </div>
  </Container>
);

export default Main;
