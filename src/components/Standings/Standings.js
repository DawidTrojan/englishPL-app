import React, { useEffect } from "react";

const Standings = ({ standings, getStandings, loading }) => {
  useEffect(() => {
    getStandings();
  }, [getStandings]);

  return (
    <ol>
      {standings.standings.map(el =>
        el.table.map(el => (
          <div key={el.position}>
            <li>{el.team.name}</li>
            <span>{el.won}</span>
            <br />
            <span>Points: {el.points}</span>
          </div>
        ))
      )}
    </ol>
  );
};

export default Standings;
