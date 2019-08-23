import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Add from "./components/Add.js";
import Table from "./components/table";

class mainApp extends Component {
  state = {
    githubData: [],
    UserFound: false,
    reposExist: false
  };

  changePrivate = id => {
    console.log(id);

    console.log(this.state.githubData[id]);
    this.setState({
      githubData: this.state.githubData.map((elem, index) => {
        if (index === id) elem.private = !elem.private;
        return elem;
      })
    });
    console.log(this.state);
  };

  componentDidMount() {
    fetch("https://api.github.com/users/orayb-alsmadi/repos")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          githubData: responseJson.slice(0, 5),
          UserFound: true,
          reposExist: true
        });
      });
    // this.AddRequest("orayb-alsmadi");
  }

  AddRequest = s => {
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
      renderComponent = (
        <Table data={this.state.githubData} flip={this.changePrivate} />
      );

    return (
      <div className="container">
        <h1>github API</h1>
        <Add className="top" AddRequest={this.AddRequest} />
        <div className="bottom"> {renderComponent}</div>
      </div>
    );
  }
}

export default mainApp;
