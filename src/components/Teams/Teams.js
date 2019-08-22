import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

const Teams = ({ teams: { teams }, getTeams, loading }) => {
  useEffect(() => {
    getTeams();
  }, [getTeams]);

  return (
    <Container>
      <ul className="teams_list">
        {teams.map(team => (
          <li key={team.id}>
            <a href={team.website} target="_blank" rel="noopener noreferrer">
              <img src={team.crestUrl} alt={team.name} />
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Teams;
