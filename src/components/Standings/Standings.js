import React, { useEffect } from "react";
import Table from "./Table";

const Standings = ({ standings: { standings }, getStandings, loading }) => {
  useEffect(() => {
    getStandings();
  }, [getStandings]);

  return <Table standings={standings} />;
};

export default Standings;
