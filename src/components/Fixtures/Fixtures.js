import React, { useEffect } from "react";
import Select from "./Select";

const Fixtures = ({ fixtures, getFixtures, loading }) => {
  useEffect(() => {
    getFixtures();
  }, [getFixtures]);

  const handleOnChange = e => {
    getFixtures(e.target.value);
  };
  return (
    <div className="fixtures_select">
      <Select changeList={handleOnChange} />
      <div className="fixtures_table_container">
        <table className="fixtures">
          <thead>
            <tr className="fixtures_description">
              <th>Home Team</th>
              <th>Score</th>
              <th>Away Team</th>
              <th>Date and Time</th>
            </tr>
            {fixtures.fixtures.map(match => (
              <tr className="fixtures_positions" key={match.id}>
                <td>{match.homeTeam.name} </td>
                <td>
                  <span>{match.score.fullTime.homeTeam} : </span>
                  <span>{match.score.fullTime.awayTeam}</span>
                </td>
                <td>{match.awayTeam.name} </td>
                <td>{match.utcDate}</td>
              </tr>
            ))}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Fixtures;
