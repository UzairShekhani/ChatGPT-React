import React from "react";
import "./App.css";
import gptLogo from "./Assets/chatgpt.svg";
import addbtn from "./Assets/add-30.png";
import msgIcon from "./Assets/message.svg";
import home from "./Assets/home.svg";
import saved from "./Assets/bookmark.svg";
import rocket from "./Assets/rocket.svg";

const App = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="" className="logo" /><span className="brand">ChatGPT</span>
            <button className="midbtn"><img src={addbtn} alt="" className="addbtn" />New Chat</button>
            <div className="upperSideBottom">
              <button className="query">
                <img src={msgIcon} alt="" />
                What Is Programming ?
              </button>
              <button className="query">
                <img src={msgIcon} alt="" />
                How To Use An Api ?
              </button>
            </div>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
};

export default App;
