import React from "react";
import Btn from "./Btn";

function Row(props) {
  return (
    <tr>
      <td> {props.id} </td>
      <td> {props.name}</td>
      {props.private ? <td> private </td> : <td> public </td>}
      {props.private ? (
        <td>
          {" "}
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            checked
            disabled
          />{" "}
        </td>
      ) : (
        <td>
          {" "}
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            disabled
          />{" "}
        </td>
      )}
      {props.private ? <td> yes </td> : <td> no </td>}
      <td> {props.lang} </td>
      <td>
      <Btn link={props.link} />
      </td>
    </tr>
  );
}

export default Row;


// 