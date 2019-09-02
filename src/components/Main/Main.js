import React, { useEffect } from "react";
import Image from "./Image";
import Content from "./Content";
import { Container, Row } from "react-bootstrap";
import AOS from "aos";

const Main = ({ teams: { teams }, getInfoTeams }) => {
  useEffect(() => {
    getInfoTeams();
  }, [getInfoTeams]);

  return (
    <Container>
      <Row className="main_image justify-content-center">
        <Image />
      </Row>
      <Row className="justify-content-center">
        <Content teams={teams} />
      </Row>
    </Container>
  );
};

AOS.init();

export default Main;
