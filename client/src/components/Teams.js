import React, { useEffect, useState } from "react";
import { standingsSearch } from "../utils/searchreq";

function TeamCard() {
  const [league, setLeague] = useState([]);
  const [leagueState, setLeagueState] = useState([]);
  const pos = {
    1: "bg-green-600 m-2 rounded-xl shadow-xl m-2 p-2",
    2: "bg-green-900 m-2 rounded-xl shadow-xl m-2 p-2",
    3: "bg-green-900 m-2 rounded-xl shadow-xl m-2 p-2",
    4: "bg-green-900 m-2 rounded-xl shadow-xl m-2 p-2",
    5: "bg-cyan-600 m-2 rounded-xl shadow-xl m-2 p-2",
    6: "bg-cyan-600 m-2 rounded-xl shadow-xl m-2 p-2",
    7: "bg-cyan-600 m-2 rounded-xl shadow-xl m-2 p-2",
    8: "bg-blue-500 m-2 rounded-xl shadow-xl m-2 p-2",
    9: "bg-blue-500 m-2 rounded-xl shadow-xl m-2 p-2",
    10: "bg-blue-900 m-2 rounded-xl shadow-xl m-2 p-2",
    11: "bg-indigo-500 m-2 rounded-xl shadow-xl m-2 p-2",
    12: "bg-indigo-500 m-2 rounded-xl shadow-xl m-2 p-2",
    13: "bg-indigo-900 m-2 rounded-xl shadow-xl m-2 p-2",
    14: "bg-indigo-900 m-2 rounded-xl shadow-xl m-2 p-2",
    15: "bg-orange-600 m-2 rounded-xl shadow-xl m-2 p-2",
    16: "bg-orange-600 m-2 rounded-xl shadow-xl m-2 p-2",
    17: "bg-orange-600 m-2 rounded-xl shadow-xl m-2 p-2",
    18: "bg-red-700 m-2 rounded-xl shadow-xl m-2 p-2",
    19: "bg-red-700 m-2 rounded-xl shadow-xl m-2 p-2",
    20: "bg-red-700 m-2 rounded-xl shadow-xl m-2 p-2",
  };
  useEffect(() => {
    // async self emmitting func  cant use async on use effect call back.
    (async () => {
      const url = "https://api.football-data.org/v2/competitions/PL/standings";
      const results = await standingsSearch(url);
      console.log("resr", results);
      setLeague(results.standings[0].table);
    })();
    // setData(results);
    // only run this code when component loads.
  }, []);
  console.log("league ", league);

  return (
    <div className=" flex-auto m-2">
      {league
        ? league.map((teams, index) => (
            <div key={index} className={pos[teams.position]}>
              position {teams.position} {teams.team.name} points {teams.points}
              <p>
                games played {teams.playedGames} wins {teams.won} draws{" "}
                {teams.draw} lost {teams.lost}
              </p>
              <img
                src={teams.team.crestUrl}
                alt={teams.team.name}
                className="w-20"
              />
            </div>
          ))
        : "Loading"}
    </div>
  );
}

export default TeamCard;
