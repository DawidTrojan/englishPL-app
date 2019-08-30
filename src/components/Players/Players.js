import React, { useEffect } from "react";
import Select from "./Select";
import List from "./List";
import { Container } from "react-bootstrap";

const Players = ({ squad: { squad }, getPlayers, loading }) => {
  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  const handleOnChange = e => {
    getPlayers(e.target.value);
  };
  return (
    <Container className="players_container">
      <h2>Select a team to see the list of players and coaches</h2>
      <Select changePlayers={handleOnChange} />
      <List playersList={squad} />
    </Container>
  );
};

export default Players;
