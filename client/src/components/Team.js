import { useEffect, useState } from "react";
import {teamSearch} from "../utils/searchreq"

const getTeamData = async () => {
const teamData = await teamSearch({id:"328"}) 
return teamData

}

function Team() {

    const [teamData, setTeamData] = useState(null)

    useEffect (()=>{
        getTeamData().then(data => {
            console.log(data)
            setTeamData(data)})
        

    }, [])
    return (
      <>
      {teamData?(
        <>
        <h1>team: {JSON.stringify(teamData.name)}</h1> 
     <h2>{teamData.area.name}</h2> 
      <img src={teamData.crestUrl} alt="crest" />
      {teamData.squad.map((player,index) => <p key={index}>{player.name}</p>)}</>):"Loading..."}
     

      </>
    );
  }
  
  export default Team;