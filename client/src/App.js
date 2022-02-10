import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TeamCard from "./components/Teams";

import Navbar from "./components/Navbar";

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Navbar />
      <TeamCard />
    </Router>
=======
    // https://tailwindcss.com/docs/background-attachment#scroll
    <div className="bg-scroll" style={backgroundstyle}>
      <Router>
        <Navbar />
        <TeamCard />
      </Router>
    </div>
>>>>>>> main
  );
}

export default App;
