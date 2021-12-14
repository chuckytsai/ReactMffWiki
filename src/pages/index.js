import React from "react";
// 圖片引入
// import index1 from "../images/jpg/index1.jpg";
// import index2 from "../images/jpg/index2.jpg";
// 引入CSS
import "../styles/index.css"

export function Index() {
  return<div className="PicDiv">
      <a href="/Herolist">
        {/* <img className="PicDivImg" alt="" src={index1}></img> */}
        <h5>遊 戲 角 色</h5>
      </a>
      <a href="/Challenge">
        {/* <img className="PicDivImg" alt="" src={index2}></img> */}
        <h5>遊 戲 攻 略</h5>
      </a>
    </div>
}