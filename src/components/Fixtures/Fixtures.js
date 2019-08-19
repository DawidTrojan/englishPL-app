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
      <ul>
        {loading ? (
          <div>Loading</div>
        ) : (
          fixtures.fixtures.map(match => (
            <li key={match.id}>
              {match.homeTeam.name} {match.score.fullTime.homeTeam} :{" "}
              {match.score.fullTime.awayTeam} {match.awayTeam.name}{" "}
              {match.utcDate}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Fixtures;
