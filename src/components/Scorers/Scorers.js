import React, { useEffect } from "react";
import Table from "./Table";

const Scorers = ({ scorers: { scorers }, getScorers, loading }) => {
  useEffect(() => {
    getScorers();
  }, [getScorers]);

  return <Table scorers={scorers} />;
};

export default Scorers;
