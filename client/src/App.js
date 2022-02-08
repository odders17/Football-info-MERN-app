import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TeamCard from "./components/Teams";
import trophy from "./images/trophybackground.png";
import Navbar from "./components/Navbar";
function App() {
  const backgroundstyle = {
    backgroundImage: `url(
      ${trophy}
      )`,
  };
  return (
    // https://tailwindcss.com/docs/background-attachment#scroll
    <div className="bg-scroll" style={backgroundstyle}>
      {/* "<img src={trophy} className="w-full" alt="trophy" /> */}
      <Router>
        <Navbar />
        <TeamCard />
      </Router>
    </div>
  );
}

export default App;
