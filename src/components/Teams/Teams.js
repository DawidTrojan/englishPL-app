import React, { useEffect } from "react";
import TeamsList from "./TeamsList";
import { Container } from "react-bootstrap";

const Teams = ({ teams: { teams }, getTeams }) => {
  useEffect(() => {
    getTeams();
  }, [getTeams]);

  return (
    <Container className="teams_container">
      <TeamsList teams={teams} />
    </Container>
  );
};

export default Teams;
