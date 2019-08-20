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

  componentDidMount() {
    fetch("http://localhost:3001/orayb-alsmadi")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          githubData: responseJson,
          UserFound: true,
          reposExist: true
        });
      });
    // this.searchRequest("orayb-alsmadi");
  }

  searchRequest = s => {
    let request = `http://localhost:3001/${s}`;
    axios.get(request).then(response => {
      console.log(response.data);
      // debugger;
      if (Array.isArray(response.data)) {
        this.setState({
          githubData:
            response.data.length >= 1
              ? response.data
              : "User Found, but there is no repo"
        });
      } else {
        this.setState({
          githubData: "User is not Found"
        });
      }
    });
  };

  render() {
    let renderComponent = "";

    if (this.state.githubData === "User is not Found")
      renderComponent = <h1> "User is not Found" </h1>;

    if (this.state.githubData === "User Found, but there is no repo")
      renderComponent = <h1> "User Found, but there is no repo" </h1>;

    if (Array.isArray(this.state.githubData))
      renderComponent = <Table data={this.state.githubData} />;

    return (
      <div className="container">
        <h1>github API</h1>
        <Search className="top" searchRequest={this.searchRequest} />
        <div className="bottom"> {renderComponent}</div>
      </div>
    );
  }
}

export default mainApp;
