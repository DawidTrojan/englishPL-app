import React, { useEffect } from "react";
import image from "./main.jpg";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = ({ teams: { teams }, getInfoTeams, loading, auth }) => {
  useEffect(() => {
    getInfoTeams();
  }, [getInfoTeams]);

  return (
    <Container>
      <div className="main_image">
        <img src={image} alt="" />
      </div>

      <Row className="justify-content-center">
        {teams.map(el => (
          <Col
            key={el.id}
            id={el.id}
            xs="12"
            lg="5"
            className="main_info_box"
            data-aos="zoom-in"
          >
            <div className="main_box_photo">
              <img src={el.crestUrl} alt={el.name} />
            </div>
            <div className="main_box_content">
              <h3>
                Name: <span>{el.name}</span>
              </h3>
              <h3>
                Short name: <span>{el.shortName}</span>
              </h3>
              {el.founded === null ? null : (
                <h3>
                  Founded: <span>{el.founded}</span>
                </h3>
              )}
              <h3>
                Stadium: <span>{el.venue}</span>
              </h3>
              <h3>
                Colors: <span>{el.clubColors}</span>
              </h3>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

AOS.init();

export default Main;
