import React, { useEffect } from 'react';

const Main = ({ teams, getTeams }) => {
    useEffect(() => {
        getTeams();
   }, [getTeams]);

    return (
      <ol>
        {teams.map(team => (
            <div className="teamContainer" key={team.id}>
            <li>{team.name}</li>
            <p>{team.email}</p>
            <a href={team.website}>Go to Website!</a>
            </div>
        ))}
      </ol>
    );
}

export default Main;