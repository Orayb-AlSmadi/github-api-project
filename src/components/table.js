import React, { Component } from "react";
import Row from "./Row";

class Table extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#of repos</th>
            <th scope="col">name of the repo</th>
            <th scope="col">repo state</th>
            <th scope="col">check,private</th>
            <th scope="col">private</th>
            <th scope="col">language</th>
            <th scope="col"> url </th>
          </tr>
        </thead>

        <tbody>
          {this.props.data.map((repo, index) => {
            return (
              <Row
                id={index + 1}
                name={repo.name}
                private={repo.private}
                lang={repo.language}
                link={repo.svn_url}
                key={repo.id}
                flip={this.props.flip}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
