import React, { useEffect } from "react";
import Table from "./Table";
import { Container } from "react-bootstrap";

const Standings = ({ standings: { standings }, getStandings, loading }) => {
  useEffect(() => {
    getStandings();
  }, [getStandings]);

  return (
    <Container>
      <div className="standings_container">
        <Table standings={standings} />
      </div>
    </Container>
  );
};

export default Standings;
