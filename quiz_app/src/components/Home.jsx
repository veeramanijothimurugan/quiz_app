import React, { useEffect, useState } from "react";
import "../components/home.css";
import ScoreCard from "./ScoreCard";

const Home = ({ input, data}) => {
  const [currQus, setCurrQur] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [length, setLength] = useState(1);
  const [yourAnswer,setYourAnswer] = useState([]);

  const calcScore = (e) =>{
    let ans=e.target.value;
    setYourAnswer(yourAnswer.concat(ans));
    if(ans===data[currQus].correct_option){
      setScore(score+1);
    }
    if(currQus+1<=data.length-1){
      setCurrQur(currQus+1);
      setLength(length+1);
    }
  }

  useEffect(()=>{
    let intervel;
    if(timer>0&&!showScore){
      intervel = setInterval(()=>{
        setTimer((prevTimer) => prevTimer - 1);
      },1000);
    }else{
      clearInterval(intervel);
      setShowScore(true);
    }
    return ()=> clearInterval(intervel);
  },[timer,showScore]);


  return (
    <>
      {!showScore ? (
        <div className="home-container">
          <div>
            <h4 className="user">Hello {input}, here is your question and<br /> you have <span className="buzzer">{timer}</span>seconds more..</h4>
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
        <ScoreCard score={score} data={data} yourAnswer={yourAnswer}/>
      )}
    </>
  );
};

export default Home;
