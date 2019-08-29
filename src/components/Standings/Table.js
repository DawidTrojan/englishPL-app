import React from "react";
import TableList from "./TableList";

const Table = ({ standings }) => (
  <>
    <div className="table_container">
      <table className="premier_league_lg">
        <thead>
          <tr className="table_description">
            <th>Position</th>
            <th className="team-header">Team</th>
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
    <div className="table_container_xs">
      <table className="premier_league_xs">
        <thead>
          <tr className="table_description_xs">
            <th>Pos.</th>
            <th className="team-header_xs">Team</th>
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
