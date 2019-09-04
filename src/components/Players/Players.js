import React, { useEffect } from "react";
import Select from "./Select";
import Table from "./Table";
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
          <h2>Select a team to see the list of players</h2>
          <Select changeOption={handleOnChange} />
          <Table players={squad} />
        </>
      )}
    </Container>
  );
};

export default Players;
