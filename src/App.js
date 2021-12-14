import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// ==========引用web 的js=============
import { Index } from "./pages";
//===========引用樣式==============
import "./styles/App.css";
// ===========引用物件===============
import { Nav, Flooter } from "./components/world" // 腳底

function App() {
  return (
    <Router>
      <Nav />
      {/* ===============首頁================= */}
      <Router exact path="/">
        <Index />
      </Router>

      <Flooter />
    </Router>
  )
}
export default App;
