import React from "react";

const TableList = ({ playersList }) => (
  <>
    {playersList.map(el => (
      <tr className="players_list__positions" key={el.id}>
        <td className="players_list__name">{el.name}</td>
        {el.position === null ? <td>unknown</td> : <td>{el.position}</td>}
        <td>{el.nationality.slice(0, 13)}</td>
        <td>{el.role}</td>
        {el.shirtNumber === null ? <td>unknown</td> : <td>{el.shirtNumber}</td>}
      </tr>
    ))}
  </>
);

export default TableList;
