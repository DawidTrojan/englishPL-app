import React, { useEffect } from "react";
import Table from "./Table";
import { Container } from "react-bootstrap";

const Standings = ({ standings: { standings }, getStandings, loading }) => {
  useEffect(() => {
    getStandings();
  }, [getStandings]);

  return (
    <Container className="standings_container">
      <Table standings={standings} />
    </Container>
  );
};

export default Standings;
