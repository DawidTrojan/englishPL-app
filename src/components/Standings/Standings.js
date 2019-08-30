import React, { useEffect } from "react";
import Table from "./Table";
import { Container } from "react-bootstrap";

const Standings = ({ standings: { standings }, getStandings, loading }) => {
  useEffect(() => {
    getStandings();
  }, [getStandings]);

  return (
    <Container className="standings_container">
      <h2>Premier League standings 2019/2020</h2>
      <Table standings={standings} />
    </Container>
  );
};

export default Standings;
