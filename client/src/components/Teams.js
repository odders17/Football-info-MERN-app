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

  return league.map((l) => (
    <div>
      position {l.position} {l.team.name} points {l.points}
      <p>
        games played {l.playedGames} wins {l.won} draws {l.draw} lost {l.lost}
      </p>
      <img src={l.team.crestUrl} alt={l.team.name} />
    </div>
  ));
}

export default TeamCard;
