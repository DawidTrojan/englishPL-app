import React from "react";
import { Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const List = ({ playersList }) => (
  <Row className="justify-content-center">
    {playersList.map(player => (
      <Col
        className="players_box"
        key={player.id}
        lg="3"
        md="5"
        sm="9"
        xs="10"
        data-aos="zoom-in"
      >
        <div className="players_content_box">
          <h3>
            Name: <span>{player.name}</span>
          </h3>
          {player.position === null ? null : (
            <span>Pos: {player.position}</span>
          )}
          <span>Nationality: {player.nationality}</span>
          <span>Role: {player.role}</span>
          {player.shirtNumber === null ? null : (
            <span>Shirt Number: {player.shirtNumber}</span>
          )}
        </div>
      </Col>
    ))}
  </Row>
);

AOS.init();

export default List;
