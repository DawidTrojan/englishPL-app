import React, { useEffect } from "react";
import Select from "./Select";
import List from "./PlayersList";
import Loading from "../Loading";
import { Container } from "react-bootstrap";

const Players = ({ squad: { squad }, getPlayers }) => {
  useEffect(() => {
    getPlayers();
  }, [getPlayers]);

  const handleOnChange = e => {
    getPlayers(e.target.value);
  };
  return (
    <Container className="players_container">
      {squad.length === 0 ? (
        <Loading></Loading>
      ) : (
        <>
          <h2>Select a team to see the list of players and coaches</h2>
          <Select changeOption={handleOnChange} />
          <List playersList={squad} />
        </>
      )}
    </Container>
  );
};

export default Players;
