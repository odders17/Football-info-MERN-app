import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            // { for jsx} `string` ${javascript in string literal}
            <div
              key={index}
              className={`${
                pos[teams.position]
              } grid md:grid-cols-7 grid-cols-4 flex-wrap `}
            >
              <div className=" statcolumn ml-2">
                <h1 className="text-4xl text-white statrow">Position </h1>
                <p className="statrow text-center w-16">{teams.position}</p>
              </div>
              <Link
                  to={{ pathname: "/team", search: `?teamId=${teams.team.id}` }}
                >
              <div className=" grid grid-cols-2">
              <div className=" statcolumn ">
                {teams.team.name}
                
              </div>
              
              <img
                  src={teams.team.crestUrl}
                  alt={teams.team.name}
                  className="w-6 mx-0 my-auto"
                />
                </div>
              </Link>
              <div className="statcolumn">
                <p>points {teams.points}</p>
              </div>
              <div className=" statcolumn">
                games played {teams.playedGames}
              </div>
              <div className="statcolumn">wins {teams.won}</div>
              <div className="statcolumn">draws {teams.draw}</div>
              <div className="statcolumn">defeats {teams.lost}</div>
            </div>
          ))
        : "Loading"}
    </div>
  );
}

export default TeamCard;
