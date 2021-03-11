import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css'
import facebook from '../../Images/Facebook.png'
import twitter from '../../Images/Twitter.png'
import youtube from '../../Images/YouTube.png'



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
            <br></br>
            <div className="detail">
            <h1>{strTeam}</h1>
            <h4>Founded: {intFormedYear}</h4>
            <h4>Country: {strCountry}</h4>
            <h4>Sports type: Football</h4>
            <h4>Gender: {strGender}</h4>

            </div>
            <br></br>
            <div>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
            <br></br>

            <div className="icon">
            <a href="https://twitter.com/" target="blank"><img src={twitter}></img></a>
            <a href="https://www.facebook.com/" target="blank"><img src={facebook}></img></a>
            <a href="https://www.youtube.com/" target="blank"><img src={youtube}></img></a>
            </div>

        </div>
    );
};

export default TeamDetail;