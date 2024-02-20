import React from "react";
import "./App.css";
import gptLogo from "./Assets/chatgpt.svg";

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">ChatGPT</span>
            <button className="midbtn">
              <img src="" alt="" className="addbtn" />
              New Chat
            </button>
            <div className="upperSideBottom">
              <button className="query">
                <img src="" alt="" />
                What Is Programming ?
              </button>
              <button className="query">
                <img src="" alt="" />
                What Is Programming ?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide"></div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default App;
