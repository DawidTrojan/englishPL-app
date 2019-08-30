import React, { useEffect } from "react";
import Select from "./Select";
import Table from "./Table";
import { Container } from "react-bootstrap";

const Fixtures = ({ fixtures: { fixtures }, getFixtures, loading }) => {
  useEffect(() => {
    getFixtures();
  }, [getFixtures]);

  const handleOnChange = e => {
    getFixtures(e.target.value);
  };
  return (
    <Container className="fixtures_select">
      <h2>Select matchday to check matches and live results </h2>
      <Select changeList={handleOnChange} />
      <Table fixtures={fixtures} />
    </Container>
  );
};

export default Fixtures;
