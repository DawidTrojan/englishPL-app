import React from "react";

const TableList = ({ standingsList }) => (
  <>
    {standingsList.map(el =>
      el.table.map(el => (
        <tr className="table_list__positions" key={el.position}>
          <td>{el.position}.</td>
          <td className="table_list__team">
            <img src={el.team.crestUrl} alt="Logo" />
            {el.team.name}
          </td>
          <td>{el.playedGames}</td>
          <td>{el.won}</td>
          <td>{el.draw}</td>
          <td>{el.lost}</td>
          <td>{el.goalsFor}</td>
          <td>{el.goalsAgainst}</td>
          <td>{el.points}</td>
        </tr>
      ))
    )}
  </>
);

export default TableList;
