import React, { useState } from "react";
import "../components/answer.css";
import Start from "./Start";
import check from "../assets/check.png";
import wrong from "../assets/wrong.png";

const Answer = ({ data, yourAnswer }) => {
  const exit = () => {
    console.log("button Clicked");
    window.open("/");
  };
  console.log(yourAnswer);

  return (
    <>
      <div className="ans-align">
        <h1 className="anscard-title">Answers</h1>
        <div className="ans-container">
          <div className="row">
            {data.map((data, index) => (
              <>
                <div className="col-xs-6 col-sm-4 col-md-4 col-lg-2 card">
                  <p key={index} className="question">
                    {data.id}. {data.question}
                  </p>
                  {yourAnswer[index] !== data.correct_option && (
                    <p className="wrg-answer">
                      <img className="wrg-check" src={wrong} alt="" />
                      {yourAnswer[index]}
                    </p>
                  )}

                  <p className="crt-answer">
                    <img className="ans-check" src={check} alt="" />
                    {data.correct_option}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
        <button className="exit" onClick={exit}>Exit</button>
      </div>
    </>
  );
};

export default Answer;
