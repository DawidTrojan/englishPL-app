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
    <Container>
      <Select changePlayers={handleOnChange} />
      <List playersList={squad} />
    </Container>
  );
};

export default Players;
