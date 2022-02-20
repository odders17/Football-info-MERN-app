import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeamCard from "./components/Teams";
import trophy from "./images/trophybackground.png";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Player from "./components/Player";
function App() {
<<<<<<< HEAD
  const { loading, data } = useQuery(getApi);
  return (
    <Router>
      {/* <Navbar /> */}
      {loading ? "...Loading" : <TeamCard ApiKey={data["getApi"]["apiKey"]} />}
    </Router>
=======
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
          <Route path="/team" element={<Team/>} />
          <Route path="/player" element={<Player/>} />
          {/* <Route path="/dashboard" element={<Dashboard authed={true} />} /> */}
        </Routes>
      </Router>
    </div>
>>>>>>> main
  );
}

export default App;
