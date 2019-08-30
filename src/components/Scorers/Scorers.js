import React, { useEffect } from "react";
import Table from "./Table";
import { Container } from "react-bootstrap";

const Scorers = ({ scorers: { scorers }, getScorers, loading }) => {
  useEffect(() => {
    getScorers();
  }, [getScorers]);

  return (
    <Container>
      <div className="scorers_container">
        <h2>Statistics of the league's top scorers</h2>
        <Table scorers={scorers} />
      </div>
    </Container>
  );
};

export default Scorers;
