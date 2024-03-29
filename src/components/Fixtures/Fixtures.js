import React, { useEffect } from "react";
import Select from "./Select";
import Table from "./Table";
import Loading from "../Loading/Loading";
import { Container } from "react-bootstrap";

const Fixtures = ({ fixtures: { fixtures }, getFixtures }) => {
  useEffect(() => {
    getFixtures();
  }, [getFixtures]);

  const handleOnChange = e => {
    getFixtures(e.target.value);
  };
  return (
    <Container className="fixtures_container">
      {!fixtures.length ? (
        <Loading></Loading>
      ) : (
        <>
          <h2>Matches and live results </h2>
          <Select changeOption={handleOnChange} />
          <Table fixtures={fixtures} />
        </>
      )}
    </Container>
  );
};

export default Fixtures;
