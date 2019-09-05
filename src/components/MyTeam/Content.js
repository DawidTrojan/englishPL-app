import React from "react";

const Content = ({ myTeam }) => (
  <div className="myTeam_box">
    <div>
      <img src={myTeam.crestUrl} alt={myTeam.name} />
    </div>
    <h4>
      Name: <span>{myTeam.name}</span>
    </h4>
    <h4>
      Address: <span>{myTeam.address}</span>
    </h4>
    <h4>
      Colors: <span>{myTeam.clubColors}</span>
    </h4>
    <h4>
      Founded: <span>{myTeam.founded}</span>
    </h4>
    <h4>
      Stadium: <span>{myTeam.venue}</span>
    </h4>
    {!myTeam.phone ? null : (
      <h4>
        Phone: <span>{myTeam.phone}</span>
      </h4>
    )}
    {!myTeam.email ? null : (
      <h4>
        Email: <span>{myTeam.email}</span>
      </h4>
    )}
    <h4>
      <a href={myTeam.website} target="_blank" rel="noopener noreferrer">
        Go to official website!
      </a>
    </h4>
  </div>
);

export default Content;
