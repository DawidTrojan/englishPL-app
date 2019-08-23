import React from "react";
import TableList from "./TableList";

const Table = ({ scorers }) => (
  <div className="scorers_container">
    <table className="scorers">
      <thead>
        <tr className="scorers_description">
          <th className="scorers_header">Name</th>
          <th>Goals</th>
          <th>Position</th>
          <th>Team</th>
          <th>Nationality</th>
        </tr>
        <TableList scorersList={scorers} />
      </thead>
    </table>
  </div>
);

export default Table;