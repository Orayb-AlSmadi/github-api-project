import React, { Component } from "react";

class Search extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({ search: e.target.value });
  };

  handleClick = () => {
    console.log(this.state.search);
    this.props.searchRequest(this.state.search);
  };

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="search for github username"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.handleClick}>
              Search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
