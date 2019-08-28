import React from "react";
import FavouritesList from "./FavouritesList";
import { Redirect } from "react-router-dom";

const Favourites = ({ auth }) => {
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="favourites">
      <h2>Favourite Team</h2>
      <FavouritesList />
    </div>
  );
};

export default Favourites;
