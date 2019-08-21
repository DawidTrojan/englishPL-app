import React from "react";

const TableList = ({ standingsList }) => (
  <>
    {standingsList.map(el =>
      el.table.map(el => (
        <tr className="table_positions" key={el.position}>
          <td className="position">{el.position}.</td>
          <td className="team">
            <img src={el.team.crestUrl} alt="Logo" />
            {el.team.name}
          </td>
          <td className="played">{el.playedGames}</td>
          <td className="won">{el.won}</td>
          <td className="draw">{el.draw}</td>
          <td className="lost">{el.lost}</td>
          <td className="goalsFor">{el.goalsFor}</td>
          <td className="goalsAgainst">{el.goalsAgainst}</td>
          <td className="points">{el.points}</td>
        </tr>
      ))
    )}
  </>
);

export default TableList;
