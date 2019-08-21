import React from "react";
import TableList from "./TableList";

const Table = ({ fixtures }) => (
  <div className="fixtures_table_container">
    <table className="fixtures">
      <thead>
        <tr className="fixtures_description">
          <th>Home Team</th>
          <th>Score</th>
          <th>Away Team</th>
          <th>Date and Time</th>
        </tr>
        <TableList fixturesList={fixtures} />
      </thead>
    </table>
  </div>
);

export default Table;
