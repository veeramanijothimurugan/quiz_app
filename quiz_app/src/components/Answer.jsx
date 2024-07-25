import React, { useState } from "react";
import "../components/answer.css";
import Start from "./Start";

const Answer = ({data}) => {
  const exit = () => {
    console.log("button Clicked");
    window.open("/");
  };

  return (
    <>
      <div className="ans-align">
        <h1>Answers</h1>
        <div>
          <div className="row">
            {data.map((data) => (
              <>
                <div className="col-sm-3 col-md-3 col-lg-2 card">
                  <p className="question">
                    {data.id}. {data.question}
                  </p>
                  <p className="answer">{data.correct_option}</p>
                </div>
              </>
            ))}
          </div>
        </div>
        <button className="exit" onClick={exit}>
            Exit
          </button>
      </div>
    </>
  );
};

export default Answer;
