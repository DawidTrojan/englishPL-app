import React, { useEffect } from "react";

const Standings = ({ standings, getStandings, loading }) => {
  useEffect(() => {
    getStandings();
  }, [getStandings]);

  return (
    <div className="table_container">
      <table className="premier_league">
        <thead>
          <tr className="table_title">
            <th>Premier League 2019/20</th>
          </tr>
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
          {standings.standings.map(el =>
            el.table.map(el => (
              <tr className="table_positions" key={el.position}>
                <td className="position">{el.position}</td>
                <td className="team">{el.team.name}</td>
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
        </thead>
      </table>
    </div>
  );
};

export default Standings;
