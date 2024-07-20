import React, { useState } from "react";
import "../components/home.css";
import data from "../assets/data.json";
import scoreimg from "../assets/celebrate.png";
import correct from "../assets/check.png";
import wrong from "../assets/wrong.png"

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
            <h4>Hello {input}, here is your question</h4>
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
          <h4>YOUR SCORE</h4>
          <img src={scoreimg} alt="score" />
          <h2 className="scoreDisplay">{score}</h2>
          <h2 className="cele">Congratulations!</h2>
          <div className="ans">
            <span><img className="icon" src={correct} alt="" /> {score} Correct</span>
            <span><img className="icon" src={wrong} alt="" /> {(data.length)-score} Incorrect</span>
          </div>
          <p className="showAns">See answers</p>
          <button className="repeat">Reattempt</button>
        </div>
      )}
    </>
  );
};

export default Home;
