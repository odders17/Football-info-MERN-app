import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import TeamCard from "./components/Teams";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <TeamCard />
    </Router>
  );
}

export default App;
