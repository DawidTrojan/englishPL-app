import React from "react";

const TableList = ({ fixturesList }) => (
  <>
    {fixturesList.map(match => (
      <tr className="fixtures_positions" key={match.id}>
        <td>{match.homeTeam.name} </td>
        <td>
          <span className="fixtures_result_home">
            {match.score.fullTime.homeTeam}
          </span>
          <span className="fixtures_result_away">
            {match.score.fullTime.awayTeam}
          </span>
        </td>
        <td>{match.awayTeam.name} </td>
        <td>{match.utcDate}</td>
      </tr>
    ))}
  </>
);

export default TableList;
