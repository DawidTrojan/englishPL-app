import React, { useEffect } from "react";

const Scorers = ({ scorers, getScorers, loading }) => {
  useEffect(() => {
    getScorers();
  }, [getScorers]);

  return (
    <div className="scorers_container">
      <table className="scorers">
        <thead>
          <tr className="scorers_title">
            <th>Premier League Scorers 2019/20</th>
          </tr>
          <tr className="scorers_description">
            <th className="scorers_header">Name</th>
            <th>Goals</th>
            <th>Position</th>
            <th>Team</th>
            <th>Nationality</th>
          </tr>
          {scorers.scorers.map(el => (
            <tr className="scorers_positions" key={el.player.id}>
              <td>{el.player.name}</td>
              <td>{el.numberOfGoals}</td>
              <td>{el.player.position}</td>
              <td>{el.team.name}</td>
              <td>{el.player.nationality}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Scorers;
