import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeamCard from "./components/Teams";
import trophy from "./images/trophybackground.png";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
function App() {
  const backgroundstyle = {
    backgroundImage: `url(
      ${trophy}
      )`,
  };
  return (
    // https://tailwindcss.com/docs/background-attachment#scroll
    <div className="bg-scroll" style={backgroundstyle}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<TeamCard />} />
          <Route path="/team" element={<Team teamId={true} />} />
          {/* <Route path="/dashboard" element={<Dashboard authed={true} />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
