import { useEffect, useState } from "react";
import {teamSearch} from "../utils/searchreq";
import pitch from "../images/pitch.jpg";

const getTeamData = async () => {
const teamData = await teamSearch({id:"328"}) 
return teamData

}

function Team() {

  const containerStyle = {
    display:'flex flex-col',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    height: '70%',
    width: '70%',
    marginTop: '70px',
    marginLeft: '20px',
    marginBottom: '70px', 
};

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
      <div className="bg-black text-white p-20"style={containerStyle}>
      <div  styles={{ backgroundImage:`url(${pitch})` }}></div>
      <h1  className="text-2xl">Team: {JSON.stringify(teamData.name)}</h1>
      <h2>{teamData.area.name}</h2>
      <h3>Founded: {teamData.founded}</h3>
      <h3>Ground: {teamData.venue}</h3>
      <img src={teamData.crestUrl} className="w-16"alt="crest" />


      <div className="flex flex-col">{teamData.squad.map((player,index) => 
      player.position==="Goalkeeper"?<p key={index}>{player.name}: <span className="font-bold text-blue-300">{player.position}</span></p>:""
       )
      }  
      {teamData.squad.map((player,index) => 
      player.position==="Defender"?<p key={index}>{player.name}: <span className="font-bold text-blue-300">{player.position}</span></p>:""
       )
      }
        {teamData.squad.map((player,index) => 
      player.position==="Midfielder"?<p key={index}>{player.name}: <span className="font-bold text-blue-300">{player.position}</span></p>:""
       )
      }  
    {teamData.squad.map((player,index) => 
      player.position==="Attacker"?<p key={index}>{player.name}: <span className="font-bold text-blue-300">{player.position}</span></p>:""
       )
      }</div>
      <img src={pitch} alt="pitch" span className="flex"/>     
      </div>):"Loading..."}
      </>
      
    );
  }
  
  
  export default Team;