import React, { useEffect } from "react";
import Table from "./Table";
import Select from "./Select";
import Loading from "../Loading";
import { Container } from "react-bootstrap";

const Scorers = ({ scorers: { scorers }, getScorers }) => {
  useEffect(() => {
    getScorers();
  }, [getScorers]);

  const handleOnChange = e => {
    getScorers(e.target.value);
  };

  return (
    <Container className="scorers_container">
      {!scorers.length ? (
        <Loading></Loading>
      ) : (
        <>
          <h2>League's top scorers</h2>
          <span>Filter scorers list</span>
          <Select changeFilter={handleOnChange} />
          <Table scorers={scorers} />
        </>
      )}
    </Container>
  );
};

export default Scorers;
