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
<div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
     <table className="min-w-full text-center">
  <thead className="border-b bg-gray-800">
    <tr>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">position</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4"></th>

      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Team</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Points</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Games Played</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Wins</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Draws</th>
      <th  scope="col" className="text-sm font-medium text-white px-6 py-4">Defeats</th>

    </tr>
  </thead >
  <tbody>
  {league
        ? league.map((teams, index) => (
    <tr className="bg-white border-b" key={index}>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{teams.position}</td>
      {/* <td>{teams.team.name}</td> */}
      
<td className="flex  ">
  <Link  to={{ pathname: "/team", search: `?teamId=${teams.team.id}` }}>
    <img src={teams.team.crestUrl} alt={teams.team.name} className="w-10 mt-1" />
    
  </Link>
</td>
      <td>{teams.team.name}</td>
      <td>{teams.points}</td>
      <td>{teams.playedGames}</td>
      <td>{teams.won}</td>
      <td>{teams.draw}</td>
      <td>{teams.lost}</td>
    </tr>
        )):"Loading..."}
  </tbody>


</table>
</div>
  </div>
  </div>
    
    </div>
  );
}

export default TeamCard;
