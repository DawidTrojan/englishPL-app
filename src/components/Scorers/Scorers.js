import React, { useEffect } from "react";

const Scorers = ({ scorers, getScorers, loading }) => {
  useEffect(() => {
    getScorers();
  }, [getScorers]);

  return (
    <ol>
      {scorers.scorers.map(el => (
        <li key={el.player.id}>
          <span>{el.player.name}</span>
          <br />
          <span> Birthday: {el.player.dateOfBirth}</span>
          <br />
          <span> Goals: {el.numberOfGoals}</span>
          <br />
          <span> Team: {el.team.name}</span>
        </li>
      ))}
    </ol>
  );
};

export default Scorers;
