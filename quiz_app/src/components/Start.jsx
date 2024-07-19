import React, { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import "../components/start.css";

const Start = () => {
  const [homeDisplay, setHomeDisplay] = useState(false);
  const [input, setInput] = useState("");

  return (
    <>
      {homeDisplay ? (
        <Home input={input} />
      ) : (
        <div className="container">
          <div className="split left">
            <div className="centered">
                <h1>Quizzo</h1>
              <h3>
                Expand your mind, one question at a time. Learn something new
                every day.
              </h3>
            </div>
          </div>

          <div className="split right">
            <div className="centered">
            <p className="title">Let's Start the quiz <br /><span className="detail">Enter your details</span></p>
              <input
                placeholder="Name"
                name="name"
                type="text"
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <br />
              <input type="text" placeholder="Email" />
              <br />
              <button className="btn"
                onClick={() => {
                  setHomeDisplay(true);
                }}
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Start;
