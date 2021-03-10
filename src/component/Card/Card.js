import React from 'react';
import './Card.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const {strTeamLogo, strTeam, idTeam} = props.team
    return (
        <div className="team">
            
                <img src={strTeamLogo}></img>
                <h1>{strTeam}</h1>
                <h4>Sports type: Football</h4>
                <button className="btn btn-danger"><Link to={`/id/${idTeam}`}>Explore</Link></button>
            
        </div>
    );
};

export default Card;