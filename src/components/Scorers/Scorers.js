import React, { useEffect } from "react";
import Table from "./Table";
import Loading from "../Loading";
import { Container } from "react-bootstrap";

const Scorers = ({ scorers: { scorers }, getScorers }) => {
  useEffect(() => {
    getScorers();
  }, [getScorers]);

  return (
    <Container className="scorers_container">
      {scorers.length === 0 ? (
        <Loading></Loading>
      ) : (
        <>
          <h2>Statistics of the league's top scorers</h2>
          <Table scorers={scorers} />
        </>
      )}
    </Container>
  );
};

export default Scorers;
