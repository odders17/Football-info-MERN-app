// https://api.football-data.org/v2/players/{id} (Ben Mee = 167115)

import { useEffect, useState } from "react";
import { playerSearch } from "../utils/searchreq";
import { playerDataExample } from "./data";
import { PlayerInfo } from "./PlayerInfo"

const getPlayerData = async (ApiKey) => {
  const playerDataExample = await playerSearch({ id: "167108" }, ApiKey);
  return playerDataExample;
};

function Player({ ApiKey }) {
  const [playerData, setPlayerData] = useState(playerDataExample);

  useEffect(() => {
    getPlayerData(ApiKey).then((data) => {
      setPlayerData(data);
    });
  }, []);
  return (
    <div className="border-2 border-black mx-auto w-1/4 rounded-xl m-2 text-3xl">
      <PlayerInfo data={{ info: playerData.name, title: "Name" }} />
      <PlayerInfo
        data={{ info: playerData.dateOfBirth, title: "Date of birth" }}
      />
      <PlayerInfo data={{ info: playerData.position, title: "Position" }} />
      <PlayerInfo
        data={{ info: playerData.shirtNumber, title: "Shirt Number" }}
      />
      <PlayerInfo
        data={{ info: playerData.nationality, title: "National Team" }}
      />
    </div>
  );
}

export default Player;