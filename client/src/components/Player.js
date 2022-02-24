// https://api.football-data.org/v2/players/{id} (Ben Mee = 167115)

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { playerSearch } from "../utils/searchreq";
import { playerDataExample } from "./data";
import { PlayerInfo } from "./PlayerInfo"

const getPlayerData = async id => {
    const playerDataExample = await playerSearch({ id })
    return playerDataExample

}

function Player() {
    const [searchParams, setSearchParams] = useSearchParams();
    const playerId = searchParams.get("playerId")
    const [playerData, setPlayerData] = useState(playerDataExample)

    useEffect(() => {
        getPlayerData(playerId).then(data => {

            setPlayerData(data)
        })


    }, [])
    return (
        <div className="m-3 border-2 bg-gray-600 opacity-90 w-75 border-black mx-auto  rounded-xl text-3xl">

            <PlayerInfo data={{ info: playerData.name, title: "Name" }} />
            <PlayerInfo data={{ info: playerData.dateOfBirth, title: "Date of birth" }} />
            <PlayerInfo data={{ info: playerData.position, title: "Position" }} />
            <PlayerInfo data={{ info: playerData.shirtNumber, title: "Shirt Number" }} />
            <PlayerInfo data={{ info: playerData.nationality, title: "National Team" }} />

        </div>
    );
}

export default Player;