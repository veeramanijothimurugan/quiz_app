import React, { useState } from "react";
import "../components/home.css";
import data from "../assets/data.json";
import scoreimg from "../assets/score.png";

const Home = ({ input }) => {
  const [currQus, setCurrQur] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(100);
  const [score, setScore] = useState(0);
  const [length, setLength] = useState(1);

  const calcScore = (e) =>{
    let ans=e.target.value;
    console.log(ans);
    console.log(score);
    if(ans===data[currQus].correct_option){
      setScore(score+1);
    }
    if(currQus+1<=data.length-1){
      setCurrQur(currQus+1);
      setLength(length+1);
    }
  }



  return (
    <>
      {!showScore ? (
        <div className="container">
          <div className="user">
            <p>Hello {input}, here is your questions.,</p>
          </div>
          <div className="qus-card">
            <div
              className="qus-length"
              style={{ width: `${length * 10}%` }}
            ></div>
            <h4>Question {currQus + 1}</h4>
            <p className="qus">{data[currQus].question}</p>
            <div className="btns">
              {data[currQus].options.map((option, index) => (
                <button key={index} className="option" value={option} onClick={calcScore}>
                  {option}
                </button>
              ))}
            </div>
            <button
              className={currQus==data.length-1 ? "finish" : "nxt-btn"}
              onClick={() => {
                setCurrQur(currQus + 1);
                setLength(length+1);
                if(currQus===data.length-1){
                  setShowScore(true);
                }
              }}
            >
              {currQus === data.length-1 ? "Finish":"Skip"}
            </button>
          </div>
        </div>
      ) : (
        <div className="qus-card">
          <img src={scoreimg} alt="score" />
          <h2>Your score is {score}</h2>
        </div>
      )}
    </>
  );
};

export default Home;
