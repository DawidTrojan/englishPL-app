import React, { useEffect } from "react";
import Content from "./Content";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

const MyTeam = ({ auth, profile, getMyTeam, myTeam: { myTeam } }) => {
  useEffect(() => {
    getMyTeam(profile.myTeam);
  }, [getMyTeam]);

  if (!auth.uid) return <Redirect to="/signin" />;
  if (profile.isEmpty) return <Redirect to="/" />;

  return (
    <Container className="myTeam_container">
      <Content myTeam={myTeam}></Content>
    </Container>
  );
};

export default MyTeam;
