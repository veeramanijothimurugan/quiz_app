import React, { useState } from "react";
import scoreimg from "../assets/celebrate.png";
import correct from "../assets/check.png";
import wrong from "../assets/wrong.png";
import Answer from "./Answer";
import "../components/scorecard.css";

const ScoreCard = ({ score, data}) => {
    const [showAns,setShowAns]=useState(false);
  return (
    <>
      <div className="ans-body">
      {!showAns ? <div className="ans-card">
        <h4 className="title-score">YOUR SCORE</h4>
        <img src={scoreimg} alt="score" />
        <h2 className="scoreDisplay">{score}</h2>
        <h2 className="cele">Congratulations!</h2>
        <div className="result">
          <span>
            <img className="icon" src={correct} alt="" /> {score} Correct
          </span>
          <span>
            <img className="icon" src={wrong} alt="" /> {data.length - score}{" "}
            Incorrect
          </span>
        </div>
        <p
          className="showAns"
          onClick={() => {
            setShowAns(true);
          }}
        >
          See answers
        </p>
        <button className="re-btn" onClick={()=>{window.open("/")}}>Reattempt</button>
      </div>:<Answer data={data}/>}
      </div>
    </>
  );
};

export default ScoreCard;
