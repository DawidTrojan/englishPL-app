import React from "react";

const Select = ({ changePlayers }) => (
  <form>
    <select className="form-control players_form" onChange={changePlayers}>
      <option value="57">Arsenal</option>
      <option value="58">Aston Villa</option>
      <option value="1044">Bournemouth</option>
      <option value="397">Brighton</option>
      <option value="328">Burnley</option>
      <option value="61">Chelsea</option>
      <option value="354">Crystal Palace</option>
      <option value="62">Everton</option>
      <option value="338">Leicester City</option>
      <option value="64">Liverpool</option>
      <option value="65">Manchester City</option>
      <option value="66">Manchester United</option>
      <option value="67">Newcastle United</option>
      <option value="68">Norwich City</option>
      <option value="356">Sheffield United</option>
      <option value="340">Southampton</option>
      <option value="73">Tottenham Hotspur</option>
      <option value="346">Watford</option>
      <option value="563">West Ham</option>
      <option value="76">Wolverhampton</option>
    </select>
  </form>
);

export default Select;
