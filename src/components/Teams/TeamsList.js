import React from "react";

const TeamsList = ({ teams }) => (
  <ul className="teams_list">
    {teams.map(team => (
      <li key={team.id}>
        <a href={team.website} target="_blank" rel="noopener noreferrer">
          <img src={team.crestUrl} alt={team.name} />
        </a>
      </li>
    ))}
  </ul>
);

export default TeamsList;
