import { useEffect, useState } from "react";
import { teamSearch } from "../utils/searchreq";
import pitch from "../images/pitch.jpg";
import { useSearchParams, Link } from "react-router-dom";
// api request
const getTeamData = async (teamId) => {
  const teamData = await teamSearch({ id: teamId });
  return teamData;
};

function Team() {
  const [searchParams, setSearchParams] = useSearchParams();
  const teamId = searchParams.get("teamId");
  const [teamData, setTeamData] = useState(null);
  console.log("this is props " + teamId);

  useEffect(() => {
    getTeamData(teamId).then((data) => {
      console.log(data);
      setTeamData(data);
    });
  }, []);
  // <h1 className="text-2xl text-white">team: {JSON.stringify(teamData.name)}</h1>
  return (
    <>
      {teamData ? (
        <div className="bg-gray-800 text-black p-20">
          <div
            style={{
              backgroundImage: `url(${pitch})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="bg-green-200 p-2 rounded-xl -mt-2 m-auto drop-shadow-2xl mb-2 w-80 grid grid-cols-1 justify-center sm  max-w-[240px]  ">
              <h1 className="text-2xl m-auto">
                Team: {JSON.stringify(teamData.name)}
              </h1>
              <h2 className="m-auto">{teamData.area.name}</h2>
              <h3 className="m-auto">Founded: {teamData.founded}</h3>
              <h3 className="m-auto">Ground: {teamData.venue}</h3>
              <img
                src={teamData.crestUrl}
                className="w-16 m-auto"
                alt="crest"
              />
            </div>

            <div className="mobilecollums grid grid-cols-2">
              {teamData.squad.map((player, index) =>
                player.position === "Goalkeeper" ? (
                  <div
                    className="bg-green-100 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 whitespace-nowrap opacity-75 sm  max-w-[200px] ml-2 text-[8px]"
                    key={index}
                  >
                    <Link
                      to={{
                        pathname: "/player",
                        search: `?playerId=${player.id}`,
                      }}
                    >
                      {player.name}:{" "}
                      <span className="font-bold text-blue-700">
                        {player.position}
                      </span>
                    </Link>
                  </div>
                ) : (
                  ""
                )
              )}
              {teamData.squad.map((player, index) =>
                player.position === "Defender" ? (
                  <div
                    className="bg-green-100 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 whitespace-nowrap opacity-75 sm  max-w-[200px] ml-2 text-[8px]"
                    key={index}
                  >
                    <Link
                      to={{
                        pathname: "/player",
                        search: `?playerId=${player.id}`,
                      }}
                    >
                      {player.name}:{" "}
                      <span className="font-bold text-blue-700">
                        {player.position}
                      </span>
                    </Link>
                  </div>
                ) : (
                  ""
                )
              )}
              {teamData.squad.map((player, index) =>
                player.position === "Midfielder" ? (
                  <div
                    className="bg-green-100 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 whitespace-nowrap opacity-75 sm  max-w-[200px] ml-2 text-[8px]"
                    key={index}
                  >
                    <Link
                      to={{
                        pathname: "/player",
                        search: `?playerId=${player.id}`,
                      }}
                    >
                      {player.name}:{" "}
                      <span className="font-bold text-blue-700">
                        {player.position}
                      </span>
                    </Link>
                  </div>
                ) : (
                  ""
                )
              )}
              {teamData.squad.map((player, index) =>
                player.position === "Attacker" ? (
                  <div
                    className="bg-green-100 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 whitespace-nowrap opacity-75 sm  max-w-[200px] ml-2 text-[8px]"
                    key={index}
                  >
                    <Link
                      to={{
                        pathname: "/player",
                        search: `?playerId=${player.id}`,
                      }}
                    >
                      {player.name}:{" "}
                      <span className="font-bold text-blue-700">
                        {player.position}
                      </span>
                    </Link>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </>
  );
}

export default Team;
