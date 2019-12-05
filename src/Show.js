import React from "react";
import "./styles.css";

const Show = props => {
  const res =
    props.matchStatus === "completed"
      ? props.matchResult
      : Math.floor(props.startDate / 6000000) + " minuts to toss";
  const a1 =
    props.matchStatus !== "upcoming"
      ? props.matchScore[0].teamScore[0].runsScored +
        " / " +
        props.matchScore[0].teamScore[0].wickets
      : "0/0";
  const a2 =
    props.matchStatus !== "upcoming"
      ? props.matchScore[1].teamScore[0].runsScored +
        " / " +
        props.matchScore[1].teamScore[0].wickets
      : "0/0";
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
