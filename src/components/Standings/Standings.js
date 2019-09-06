import React, { useEffect } from "react";
import Table from "./Table";
import Loading from "../Loading";
import { Container } from "react-bootstrap";

const Standings = ({ standings: { standings }, getStandings }) => {
  useEffect(() => {
    getStandings();
  }, [getStandings]);

  return (
    <Container className="standings_container">
      {!standings.length ? (
        <Loading></Loading>
      ) : (
        <>
          <h2>Premier League standings 2019/2020</h2>
          <Table standings={standings} />
        </>
      )}
    </Container>
  );
};

export default Standings;
