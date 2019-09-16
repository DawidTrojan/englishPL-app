import React from "react";

const Content = ({ myTeam }) => (
  <div className="myTeam_box">
    <div>
      <img src={myTeam.crestUrl} alt={myTeam.name} />
    </div>
    <div>
      Name: <span>{myTeam.name}</span>
    </div>
    <div>
      Address: <span>{myTeam.address}</span>
    </div>
    <div>
      Colors: <span>{myTeam.clubColors}</span>
    </div>
    {!myTeam.founded ? null : (
      <div>
        Founded: <span>{myTeam.founded}</span>
      </div>
    )}
    <div>
      Stadium: <span>{myTeam.venue}</span>
    </div>
    {!myTeam.phone ? null : (
      <div>
        Phone: <span>{myTeam.phone}</span>
      </div>
    )}
    {!myTeam.email ? null : (
      <div>
        Email: <span>{myTeam.email}</span>
      </div>
    )}
    <div>
      <a href={myTeam.website} target="_blank" rel="noopener noreferrer">
        Go to official website!
      </a>
    </div>
  </div>
);

export default Content;
