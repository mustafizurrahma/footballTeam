import React, { useEffect, useState } from 'react';
import Teams from '../teams/Teams';
import './Home.css'
import Headerbg from './banner.jpeg';
const Home = () => {
    const [teams, setTeam] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams))
    }, [])
    // console.log(teams);
    // const { strSport, strTeam } = teams

    return (
        <div className="container-fluid p-0">
            <div style={{ backgroundImage: `url(${Headerbg})` }} className="header-area">
                <h1>My Fevorite Football Team</h1>
            </div>
            <div className="container">
                <div className="row">
                    {
                        teams.map((team, i) => <Teams key={i} team={team}></Teams>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;