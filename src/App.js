import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/search.js";
import Table from "./components/table";
import Row from "./components/Row";
import Btn from "./components/Btn.js";

class mainApp extends Component {
  state = {
    githubData: [],
    loaded: false
  };

  searchRequest = s => {
    let request = `https://api.github.com/users/${s}/repos`;
    axios
      .get(request)
      .then(response => {
        Array.isArray(response.data)
          ? this.setState({
              githubData: response.data.slice(1, 6),
              loaded: true
            })
          : this.setState({ githubData: "User is not Found", id: 0 });
      })
      .catch(error => {
        this.setState({ githubData: "User is not Found", id: 0 });
      });
  };

  render() {
    return (
      <div className="container">
        <h1>github API</h1>
        <Search className="top" searchRequest={this.searchRequest} />
        <div className="bottom">
          {this.state.githubData === "User is not Found" ? (
            <h1> "User is not Found" </h1>
          ) : null}

          {this.state.githubData.length === 5 && this.state.loaded ? (
            <Table data={this.state.githubData} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default mainApp;
