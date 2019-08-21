import React from "react";

const TableList = ({ scorersList }) => (
  <>
    {scorersList.map(el => (
      <tr className="scorers_positions" key={el.player.id}>
        <td>{el.player.name}</td>
        <td>{el.numberOfGoals}</td>
        <td>{el.player.position}</td>
        <td>{el.team.name}</td>
        <td>{el.player.nationality}</td>
      </tr>
    ))}
  </>
);

export default TableList;
