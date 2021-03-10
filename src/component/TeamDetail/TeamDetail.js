import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';



const TeamDetail = () => {
    const {id} = useParams();
    const [team, setTeam] = useState({});
    
    useEffect( () => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
        .then(response => response.json())
        .then(data => setTeam(data.teams[0]))
    }, [id])
    console.log(team)
    const {intFormedYear, strTeam, strCountry, strTeamBanner, strGender} = team
    return (
        
        
        <div className="container">
            <div>
                <img src={strTeamBanner}></img>
            </div>

            <div>
            <h1>{strTeam}</h1>
            <h4>Founded: {intFormedYear}</h4>
            <h4>Country: {strCountry}</h4>
            <h4>Sports type: Football</h4>
            <h4>Gender: {strGender}</h4>

            </div>

        </div>
    );
};

export default TeamDetail;