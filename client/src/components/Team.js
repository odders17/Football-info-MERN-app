import { useEffect, useState } from "react";
import {teamSearch} from "../utils/searchreq";
import pitch from "../images/pitch.jpg";

const getTeamData = async () => {
const teamData = await teamSearch({id:"58"}) 
return teamData

}

function Team() {


    const [teamData, setTeamData] = useState(null)

    useEffect (()=>{
        getTeamData().then(data => {
            console.log(data)
            setTeamData(data)})
        

    }, [])
    // <h1 className="text-2xl text-white">team: {JSON.stringify(teamData.name)}</h1> 
    return (

        <>
      {teamData?(
      <div className="bg-black text-black p-20">
      <div style={{backgroundImage:`url(${pitch})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className="bg-green-600 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 grid grid-cols-1 justify-center" >
      <h1  className="text-2xl m-auto">Team: {JSON.stringify(teamData.name)}</h1>
      <h2 className="m-auto">{teamData.area.name}</h2>
      <h3 className="m-auto">Founded: {teamData.founded}</h3>
      <h3 className="m-auto">Ground: {teamData.venue}</h3>
      <img src={teamData.crestUrl} className="w-16 m-auto" alt="crest" />
        </div>

      <div className="grid grid-cols-2">{teamData.squad.map((player,index) => 
      player.position==="Goalkeeper"?<div><p className="bg-green-600 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 whitespace-nowrap" key={index}>{player.name}: <span className="font-bold text-blue-300 ">{player.position}</span></p></div>:""
       )
      }  
      {teamData.squad.map((player,index) => 
      player.position==="Defender"?<p className="bg-green-600 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 whitespace-nowrap" key={index}>{player.name}: <span className="font-bold text-blue-300">{player.position}</span></p>:""
       )
      }
        {teamData.squad.map((player,index) => 
      player.position==="Midfielder"?<p className="bg-green-600 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 whitespace-nowrap" key={index}>{player.name}: <span className="font-bold text-blue-300">{player.position}</span></p>:""
       )
      }  
    {teamData.squad.map((player,index) => 
      player.position==="Attacker"?<p className="bg-green-600 p-2 rounded-md m-auto drop-shadow-2xl mb-2 w-80 whitespace-nowrap" key={index}>{player.name}: <span className="font-bold text-blue-300">{player.position}</span></p>:""
       )
      }</div>   
      </div></div>):"Loading..."}
      </>
      
    );
  }
  
  
  export default Team;