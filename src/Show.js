import React from "react";
import "./styles.css";

const Show = props => {
  var time = Math.floor(Date.now());
  var res = "";
  var a1 = "",
    a2 = "";
  if (props.matchStatus === "upcoming") {
    a1 = props.homeTeamName;
    a2 = props.awayTeamName;
    res = Math.floor((props.startDate - time) / 600000) + " minutes to toss";
  } else if (props.matchStatus === "completed") {
    a1 =
      props.matchScore[0].teamScore[0].battingTeamShortName +
      " " +
      props.matchScore[0].teamScore[0].runsScored +
      " / " +
      props.matchScore[0].teamScore[0].wickets;
    a2 =
      props.matchScore[1].teamScore[0].battingTeamShortName +
      " " +
      props.matchScore[1].teamScore[0].runsScored +
      " / " +
      props.matchScore[1].teamScore[0].wickets;
    res = props.matchResult;
  } else {
    a1 =
      props.matchScore[0].teamScore[0].battingTeamShortName +
      " " +
      props.matchScore[0].teamScore[0].runsScored +
      " / " +
      props.matchScore[0].teamScore[0].wickets;
    if (props.matchScore.length > 1) {
      a2 =
        props.matchScore[1].teamScore[0].battingTeamShortName +
        " " +
        props.matchScore[1].teamScore[0].runsScored +
        " / " +
        props.matchScore[1].teamScore[0].wickets;
    } else {
      a2 = " 0/0 ";
    }

    res = "match is running";
  }
  return (
    <div className="Card">
      <h4 className="SrsName">{props.seriesName}</h4>
      <div className="Detail">
        <h5>
          {props.matchNumber} . {props.venue}
        </h5>
        <h5>{a1}</h5>
        <h5>{a2}</h5>
      </div>
      <center>
        <h6 className="Sts">{res}</h6>
      </center>
    </div>
  );
};
export default Show;
