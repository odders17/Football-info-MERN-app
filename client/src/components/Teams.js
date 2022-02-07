import React, { useEffect, useState } from "react";
import { standingsSearch } from "../utils/searchreq";
import { initialData } from "./data";
function TeamCard() {
  const [league, setLeague] = useState(initialData);
  const [leagueState, setLeagueState] = useState([]);
  const pos = {
    1: "bg-green-600 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black ",
    2: "bg-green-900 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    3: "bg-green-900 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    4: "bg-green-900 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    5: "bg-cyan-600 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    6: "bg-cyan-600 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    7: "bg-cyan-600 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    8: "bg-blue-500 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    9: "bg-blue-500 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    10: "bg-blue-900 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    11: "bg-indigo-500 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    12: "bg-indigo-500 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    13: "bg-indigo-900 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    14: "bg-indigo-900 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    15: "bg-orange-600 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    16: "bg-orange-600 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    17: "bg-orange-600 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    18: "bg-red-700 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    19: "bg-red-700 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
    20: "bg-red-700 m-2 rounded-xl shadow-xl m-2 p-2 border-2 border-black",
  };
  useEffect(() => {
    // async self emmitting func  cant use async on use effect call back.
    (async () => {
      const url = "https://api.football-data.org/v2/competitions/PL/standings";
      const results = await standingsSearch(url);
      if (!results) return;
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
              <div className=" flex">
                <p className="font-fantasy, text-3xl, text-white">
                  {" "}
                  Position {teams.position}
                </p>
                <img
                  src={teams.team.crestUrl}
                  alt={teams.team.name}
                  className="w-20"
                />
              </div>
              <div>
                {teams.team.name} points {teams.points}
                <p>
                  games played {teams.playedGames} wins {teams.won} draws{" "}
                  {teams.draw} lost {teams.lost}
                </p>
              </div>
            </div>
          ))
        : "Loading"}
    </div>
  );
}

export default TeamCard;
