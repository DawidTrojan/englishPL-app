import React from "react";
import TableList from "./TableList";

const Table = ({ fixtures }) => (
  <table className="fixtures_table">
    <thead>
      <tr className="fixtures_table__header">
        <th>Home Team</th>
        <th>Score</th>
        <th>Away Team</th>
        <th>Date and Time</th>
      </tr>
      <TableList fixturesContent={fixtures} />
    </thead>
  </table>
);

export default Table;
