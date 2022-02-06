import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import { standingsSearch } from "./utils/searchreq";
import TeamCard from "./components/Teams"

import Navbar from "./components/Navbar";

// function App() {
//   const [league, setLeague] = useState([]);
//   const [leagueState, setLeagueState] = useState([]);
//   useEffect(() => {
//     // async self emmitting func  cant use async on use effect call back.
//     (async () => {
//       const url = "https://api.football-data.org/v2/competitions/PL/standings";
//       const results = await standingsSearch(url);
//       console.log("resr", results);
//       setLeague(results.standings[0].table);
//     })();
//     // setData(results);
//     // only run this code when component loads.
//   }, []);
//   console.log("league ", league);

//   return league.map((l) => (
//     <div>
//       {l.team.name}
//       {l.draw}
//       <img src={l.team.crestUrl} alt={l.team.name} />
//     </div>
//   ));
// }
function App() {

  return (
    <Router>
      <Navbar />
      <TeamCard />
 
    </Router>
  );
}

export default App;
