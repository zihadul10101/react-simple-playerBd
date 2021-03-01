import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import playerData from './fakeData/fakeData.json';
import Team from './components/Team/Team';
import TeamCart from '../src/components/Team/TeamCart/TeamCart';

function App() {
const [player , setPlayer] =useState([]);
const [selectPlayer, setSeleactPlayer]=useState([]);


useEffect(()=>{
setPlayer(playerData);
//console.log(playerData);
}, [])

const handleAddPlayer=(team)=>{
  const newPlayer =[...selectPlayer, team];
  setSeleactPlayer(newPlayer);
}

  return (
    <div className="App">
      
      <h4>Team Add:{selectPlayer.length} </h4>
      <TeamCart selectPlayer={selectPlayer}></TeamCart>
 
    
        {
          player.map(team => <Team team={team} handleAddPlayer={handleAddPlayer} ></Team>)
        }
       
        
    </div>
  );
}

export default App;
