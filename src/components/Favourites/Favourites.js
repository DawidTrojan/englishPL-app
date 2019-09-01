import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";

const Favourites = ({ auth, profile, getFavourites, teams }) => {
  useEffect(() => {
    getFavourites(profile.myTeam);
  }, [getFavourites]);

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="favourites">
      <h2>Favourite Team</h2>
    </div>
  );
};

export default Favourites;
