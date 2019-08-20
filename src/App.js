import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Search from "./components/search.js";
import Table from "./components/table";

class mainApp extends Component {
  state = {
    githubData: [],
    UserFound: false,
    reposExist: false
  };

  searchRequest = s => {
    let request = `https://api.github.com/users/${s}/repos`;
    axios
      .get(request)
      .then(response => {
        response.data.length >= 1
          ? this.setState({
              githubData: response.data.slice(0, 5),
              UserFound: true,
              reposExist: true
            })
          : this.setState({
              githubData: "User Found, but there is no repo",
              UserFound: true,
              reposExist: false
            });
      })
      .catch(error => {
        this.setState({
          githubData: "User is not Found",
          UserFound: false,
          reposExist: false
        });
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
          ) : (
            ""
          )}

          {this.state.githubData === "User Found, but there is no repo" ? (
            <h1> "User Found, but there is no repo" </h1>
          ) : (
            ""
          )}

          {this.state.githubData.length >= 1 &&
          this.state.UserFound &&
          this.state.reposExist ? (
            <Table data={this.state.githubData} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default mainApp;
