import React, { useState } from "react";
import react from "../assets/react.png";
import java from "../assets/java.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import figma from "../assets/figma.png";

import Home from "./Home"
import "../components/category.css";

import data from "../assets/QustionData/data.json"
import JavaData from "../assets/QustionData/JavaData.json"
import figmaData from "../assets/QustionData/figma.json"
import htmlData from "../assets/QustionData/html.json"
import cssData from "../assets/QustionData/css.json"
import jsData from "../assets/QustionData/js.json"


const Category = ({input}) => {
  const [fromCat,setFromCat]=useState(false);
  const [qus,setQus]=useState();

  const CategoryOption = (qus) => {
      setQus(qus);
      setFromCat(true);
  }

  return (
    <>

      {!fromCat ? (<div className="container">
        <p className="card-title">Category</p>
        <div className="row">
          <div className="cat-card col" onClick={() => CategoryOption(data)}>
            <img className="cat-img" src={react} alt="" />
            <div className="cat-btn">
              <p>React Js</p>
            </div>
          </div>
          <div className="cat-card col" onClick={() => CategoryOption(JavaData)}>
            <img className="cat-img" src={java} alt="" />
            <div className="cat-btn">
              <p>Java</p>
            </div>
          </div>
          <div className="cat-card col" onClick={() => CategoryOption(figmaData)}>
            <img className="cat-img" src={figma} alt="" />
            <div className="cat-btn">
              <p>Figma</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="cat-card col" onClick={() => CategoryOption(htmlData)}>
            <img className="cat-img" src={html} alt="" />
            <div className="cat-btn">
              <p>HTML</p>
            </div>
          </div>
          <div className="cat-card col" onClick={() => CategoryOption(cssData)}>
            <img className="cat-img" src={css} alt="" />
            <div className="cat-btn">
              <p>CSS</p>
            </div>
          </div>
          <div className="cat-card col" onClick={() => CategoryOption(jsData)}>
            <img className="cat-img" src={js} alt="" />
            <div className="cat-btn">
              <p>Js</p>
            </div>
          </div>
        </div>
      </div>):(<div><Home input={input} data={qus}/></div>)}
      
      
    </>
  );
};

export default Category;
