import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
const Teams = (props) => {
    const team = props.team;
    const history = useHistory();
    const teamDetailsHendles = teams => {
        const url = `/${teams}`
        history.push(url)
    }
    // console.log(team);

    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">

            <div className="team-single-wrap">
                <img className="team-image" src={team.strTeamBadge} alt="" />
                <h3>{team.strTeam}</h3>
                <h4>Sports type: {team.strSport}</h4>
                <button onClick={() => teamDetailsHendles(team.idTeam)} className="btn btn-primary mt-3">Explore Team <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
            </div>
        </div>

    );
};

export default Teams;