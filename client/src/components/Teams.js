import React, { useEffect, useState } from "react";
import { standingsSearch } from "../utils/searchreq";
import { initialData } from "./data";
import "./team.css";
function TeamCard() {
  const [league, setLeague] = useState(initialData);
  const [leagueState, setLeagueState] = useState([]);
  const pos = {
    1: "bg-green-600 teamStyle ",
    2: "bg-green-900 teamStyle",
    3: "bg-green-900 teamStyle",
    4: "bg-green-900 teamStyle",
    5: "bg-cyan-600 teamStyle",
    6: "bg-cyan-600 teamStyle",
    7: "bg-cyan-600 teamStyle",
    8: "bg-blue-500 teamStyle",
    9: "bg-blue-500 teamStyle",
    10: "bg-blue-900 teamStyle",
    11: "bg-indigo-500 teamStyle",
    12: "bg-indigo-500 teamStyle",
    13: "bg-indigo-900 teamStyle",
    14: "bg-indigo-900 teamStyle",
    15: "bg-orange-600 teamStyle",
    16: "bg-orange-600 teamStyle",
    17: "bg-orange-600 teamStyle",
    18: "bg-red-700 teamStyle",
    19: "bg-red-700 teamStyle",
    20: "bg-red-700 teamStyle",
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
    <div className=" container">
      {league
        ? league.map((teams, index) => (
            <div key={index} className={pos[teams.position]}>
              <div className=" flex max-w-[20%] m-0 ">
                <h1 className="text-2xl text-white">
                  Position {teams.position}
                </h1>
                <img
                  src={teams.team.crestUrl}
                  alt={teams.team.name}
                  className="w-20 m-0"
                />
              </div>
              <div className="max-w-sm m-0">
                <p>
                  {teams.team.name} points {teams.points}
                </p>
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
