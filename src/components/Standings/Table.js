import React from "react";
import TableList from "./TableList";

const Table = ({ standings }) => (
  <div className="table_container__large">
    <table className="standings_table">
      <thead>
        <tr className="standings_table__header">
          <th>Position</th>
          <th className="standings_table__team">Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>G</th>
          <th>GA</th>
          <th>Pts</th>
        </tr>
        <TableList standingsList={standings} />
      </thead>
    </table>
  </div>
);

export default Table;
