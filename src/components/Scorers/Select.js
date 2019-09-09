import React from "react";

const Select = ({ changeFilter }) => {
  return (
    <form>
      <select className="form-control fixtures_select" onChange={changeFilter}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
        <option value="80">80</option>
        <option value="90">90</option>
        <option value="100">100</option>
      </select>
    </form>
  );
};

export default Select;
