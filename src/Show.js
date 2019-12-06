import React from "react";
import "./styles.css";

const Show = props => {
  var res = "";
  var a1 = "",
    a2 = "";
  if (props.matchStatus === "upcoming") {
    res = Math.floor(props.startDate / 6000000) + " minuts to toss";
  } else if (props.matchStatus === "completed") {
    a1 =
      props.matchScore[0].teamScore[0].runsScored +
      " / " +
      props.matchScore[0].teamScore[0].wickets;
    a2 =
      props.matchScore[1].teamScore[0].runsScored +
      " / " +
      props.matchScore[1].teamScore[0].wickets;
    res = props.matchResult;
  } else {
    a1 =
      props.matchScore[0].teamScore[0].runsScored +
      " / " +
      props.matchScore[0].teamScore[0].wickets;
    a2 = " 0/0 ";
    res = "match is running";
  }
  return (
    <div className="Card">
      <h4 className="SrsName">{props.seriesName}</h4>
      <div className="Detail">
        <h5>
          {props.matchNumber} . {props.venue}
        </h5>
        <h5>
          {props.homeTeamName} {a1}
        </h5>
        <h5>
          {props.awayTeamName} {a2}
        </h5>
      </div>
      <center>
        <h6 className="Sts">{res}</h6>
      </center>
    </div>
  );
};
export default Show;
