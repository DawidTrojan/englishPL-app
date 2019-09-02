import React from "react";
import TableList from "./TableList";

const Table = ({ scorers }) => (
  <table className="scorers_table">
    <thead>
      <tr className="scorers_table__header">
        <th>Name</th>
        <th>Goals</th>
        <th>Position</th>
        <th>Team</th>
        <th>Nationality</th>
      </tr>
      <TableList scorersList={scorers} />
    </thead>
  </table>
);

export default Table;
