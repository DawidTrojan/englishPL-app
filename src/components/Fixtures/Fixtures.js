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
    <Container>
      <div className="fixtures_select">
        <Select changeList={handleOnChange} />
        <Table fixtures={fixtures} />
      </div>
    </Container>
  );
};

export default Fixtures;
