import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faPodcast, faFlag, faFutbol, faMarsDouble } from '@fortawesome/free-solid-svg-icons'
import './Details.css'
import Chele from './male.png';
import Meye from './female.png';
import Detailsbg from './details.jpg'
import { Link } from 'react-router-dom';
const TeamDetails = () => {
    const { teams } = useParams()
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teams}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]))
        // console.log(url);
    }, [teams])
    // console.log(details);
    const { strTeamBadge, strTeam, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strTwitter, strYoutube, strWebsite } = details
    return (
        <div className='container-fluid p-0'>
            <div style={{ backgroundImage: `url(${Detailsbg})` }} className="details-banner text-center" >
                <img src={strTeamBadge} alt="" />
            </div>
            <div className="details-content-wrap">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-6 col-12">
                                <div className="team-info-single">
                                    <h1>{strTeam}</h1>
                                    <h3><FontAwesomeIcon icon={faPodcast} /> <span>Founded:</span> {intFormedYear}</h3>
                                    <h3><FontAwesomeIcon icon={faFlag} /> <span>Country:</span> {strCountry}</h3>
                                    <h3><FontAwesomeIcon icon={faFutbol} /> <span>Sport Type:</span> {strSport}</h3>
                                    <h3><FontAwesomeIcon icon={faMarsDouble} /> <span>Sport Type:</span> {strGender}</h3>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-6 col-12 my-auto">
                                <div className="team-iamge ">
                                    {
                                        strGender === "Male" ? <img src={Chele} alt="" /> : <img src={Meye} alt="" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="team-article">
                        <p>{strDescriptionEN}</p>
                        {/* <p>{strDescriptionEN}</p>
                        <p>{strDescriptionEN}</p> */}
                    </div>
                </div>
                <div className="container">
                    <div className="team-social">
                        <Link to={strTwitter}><FontAwesomeIcon icon={faFacebookSquare} /> </Link>
                        <Link to={strYoutube}><FontAwesomeIcon icon={faYoutubeSquare} /> </Link>
                        <Link to={strWebsite}><FontAwesomeIcon icon={faTwitterSquare} /> </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default TeamDetails;