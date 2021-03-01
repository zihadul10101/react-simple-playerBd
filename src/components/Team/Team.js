import React from 'react';
import '../Team.css';

const Team = (props) => {
    const {image,name,salary } =props.team;
    const imgStyle={hight:'50px'};
   const handleAddPlayer=props.handleAddPlayer;
   
    return (
        <div className="team">
           
            <div>
            <img style={imgStyle} src={image} alt=""/>
            </div>
            
          <div className="playerDetiles">
          <p> Name: {name}</p> 
            <p> Salary: {salary}</p>
            <button onClick={()=> handleAddPlayer(props.team)}> add to cart</button>
          </div>

            
            
        </div>
    );
};

export default Team;