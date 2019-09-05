import React, { useEffect } from "react";
import Content from "./Content";
import Loading from "../Loading";
import { Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";

const MyTeam = ({ auth, profile, getMyTeam, myTeam: { myTeam } }) => {
  useEffect(() => {
    getMyTeam(profile);
  }, [profile, getMyTeam]);

  if (!auth.uid) return <Redirect to="/signin" />;

  return (
    <Container className="myTeam_container">
      {myTeam.length === 0 ? (
        <Loading></Loading>
      ) : (
        <Content myTeam={myTeam}></Content>
      )}
    </Container>
  );
};

export default MyTeam;
