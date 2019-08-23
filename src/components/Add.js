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
            placeholder="Repo Title"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Repo Langauge"
            id="search"
            value={this.state.search}
            onChange={this.handleChange}
          />
          <select class="custom-select" id="inputGroupSelect01">
            <option selected>Choose privacy</option>
            <option value="1">Private</option>
            <option value="2">Public</option>
          </select>

          <div className="input-group-append">
            <button className="btn btn-primary" onClick={this.handleClick}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
