import React from "react";
import TableList from "./TableList";

const Table = ({ standings }) => (
  <>
    <div className="table_container__large">
      <table className="table_large">
        <thead>
          <tr className="table_header">
            <th>Position</th>
            <th className="table_team">Team</th>
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
    <div className="table_container__small">
      <table>
        <thead>
          <tr className="table_header__small">
            <th>Pos.</th>
            <th>Team</th>
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
  </>
);

export default Table;
