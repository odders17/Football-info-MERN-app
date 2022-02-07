import React, { useEffect, useState } from "react";
import { standingsSearch } from "../utils/searchreq";

function TeamCard() {
  const [league, setLeague] = useState([]);
  const [leagueState, setLeagueState] = useState([]);
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
    <div className="flex flex-wrap m-2">
      {league
        ? league.map((teams, index) => (
            <div
              key={index}
              className="bg-green-300 m-2 rounded-xl shadow-xl m-2 p-2"
            >
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
