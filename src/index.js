import React, { Component } from "react";
import ReactDOM from "react-dom";
import { AppBar, Tabs, Tab } from "@material-ui/core";
import "./styles.css";
import Show from "./Show.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
      value2: 0,
      type1: "upcoming",
      type2: "all",
      data: []
    };
  }
  handleChange1 = (event, newValue) => {
    event.preventDefault();
    this.setState({ value1: newValue });
    switch (newValue) {
      case 1:
        this.setState({ type1: "running" }, () => {
          console.log(this.state.type1);
          this.apiChange();
        });
        break;
      case 2:
        this.setState({ type1: "completed" }, () => {
          console.log(this.state.type1);
          this.apiChange();
        });
        break;
      default:
        this.setState({ type1: "upcoming" }, () => {
          console.log(this.state.type1);
          this.apiChange();
        });
        break;
    }
  };
  handleChange2 = (event, newValue) => {
    event.preventDefault();
    this.setState({ value2: newValue });
    switch (newValue) {
      case 1:
        this.setState({ type2: "international" }, () => {
          console.log(this.state.type2);
          this.apiChange();
        });
        break;
      case 2:
        this.setState({ type2: "demestic" }, () => {
          console.log(this.state.type2);
          this.apiChange();
        });
        break;
      default:
        this.setState({ type2: "all" }, () => {
          console.log(this.state.type2);
          this.apiChange();
        });
        break;
    }
  };
  componentDidMount() {
    this.apiChange();
  }
  apiChange = () => {
    fetch("https://api.devcdc.com/cricket", {
      method: "POST",
      body: JSON.stringify({
        query:
          `{
          schedule(type:"` +
          this.state.type2 +
          `",status:"` +
          this.state.type1 +
          `",page:0){
            matchID
            matchNumber
            rRunRate
            seriesName
            venue
            matchStatus
            matchScore{
              teamScore{
                battingSide
                inning
                runsScored
                wickets
                battingTeamShortName
              }
            }
            homeTeamName
            awayTeamName
            matchResult
            startDate
          }
        }`
      })
    })
      .then(res => res.json())
      .then(json => {
        this.setState({ data: json.data.schedule });
        console.log(this.state.data);
      });
  };
  render() {
    return (
      <div className="App">
        <h1>Schedule</h1>
        <AppBar position="static" color="while">
          <Tabs
            value={this.state.value1}
            onChange={this.handleChange1}
            indicatorColor="primary"
            textColor="inherit"
            centered
          >
            <Tab label="Upcoming" />
            <Tab label="Running" />
            <Tab label="completed" />
          </Tabs>
          <Tabs
            value={this.state.value2}
            onChange={this.handleChange2}
            indicatorColor="secondary"
            textColor="inherit"
            centered
          >
            <Tab label="All" />
            <Tab label="International" />
            <Tab label="Domestic" />
          </Tabs>
        </AppBar>
        {this.state.data.map(item => (
          <Show key={item.matchID} {...item} />
        ))}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
