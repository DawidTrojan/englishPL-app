import React from "react";
import TableList from "./TableList";

const Table = ({ players }) => (
  <div className="players_table__container">
    <table className="players_table">
      <thead>
        <tr className="players_table__header">
          <th className="players_table__name">Name</th>
          <th>Position</th>
          <th>Nationality</th>
          <th>Role</th>
          <th>Shirt Nr.</th>
        </tr>
        <TableList playersList={players} />
      </thead>
    </table>
  </div>
);

export default Table;
