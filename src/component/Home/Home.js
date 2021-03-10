import React from 'react';
import { useEffect, useState } from "react";
import Banner from '../Banner/Banner';
import Card from '../Card/Card';


const Home = () => {
    const [teams, setTeams] = useState([]);

    useEffect( () => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
      .then(response => response.json())
      .then(data => setTeams(data.teams))
    }, [])
    return (
        <div>
        {/* <h1>Teams: {teams.length}</h1> */}
        <div className="row">
        <Banner className="col-md-12"></Banner>
        </div>
      <div className="row">
       {
         teams.map(team => <Card className="col-md-4" team={team}></Card>)
       }
       </div>
    </div>
    );
};

export default Home;