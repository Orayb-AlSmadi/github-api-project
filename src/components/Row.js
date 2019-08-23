import React, { Component } from "react";
import Btn from "./Btn";

class Row extends Component {
  state = {};

  handleToggle = index => {
    this.props.flip(index - 1);
  };

  render() {
    return (
      <tr>
        <td> {this.props.id} </td>
        <td> {this.props.name}</td>
        {this.props.private ? <td> private </td> : <td> public </td>}
        {this.props.private ? (
          <td>
            {" "}
            <input
              onChange={() => this.handleToggle(this.props.id)}
              type="checkbox"
              aria-label="Checkbox for following text input"
              checked
            />{" "}
          </td>
        ) : (
          <td>
            {" "}
            <input
              onChange={() => this.handleToggle(this.props.id)}
              type="checkbox"
              aria-label="Checkbox for following text input"
            />{" "}
          </td>
        )}
        {this.props.private ? <td> yes </td> : <td> no </td>}
        <td> {this.props.lang} </td>
        <td>
          <Btn link={this.props.link} />
        </td>
      </tr>
    );
  }
}

export default Row;

//
