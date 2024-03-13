import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import "./EventRegistration.css";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from 'axios'
import AuthContext from "../context/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const EventRegistration = () => {

    // const teamDetails = { teamName: "TeamName", eventName: "DEVBITS", leader: "Santosh", member1: "You", member2: "Unknown" };
    const {authTokens, userDetails} = useContext(AuthContext)
    const [teamName, setTeamName] = useState(null);
    const [eventName, setEventName] = useState(null);
    // const [leader, setLeader] = useState(teamDetails.leader);
    const [member1, setMember1] = useState(null);
    // const [member2, setMember2] = useState(teamDetails.member2);

    let navigate = useNavigate();
    const handleSubmit = async (route) => {
        if(teamName && eventName && member1) {
            const details = {
                'team_name' : teamName,
                'event_name' : eventName,
                'member_email' : member1
            }
            // const params =(details);
            try {
                const res = await axios.get('https://api.eesiitbhu.co.in/udyam/teams/join', {params : details, headers : {
                    "Authorization" : `Bearer ${authTokens.access}`
                }})
                console.log(res);
                // console.log(`comparison ${res.status === 400}`)
                if(res.status === 400) {
                    toast.error("You have already registered in another team for the same event", {position : "bottom-right"})
                } else {
                    toast.success("ypu joined the team succesfully !", {
                        position: "bottom-right"
                    });
                }  
                
                navigate('/dashboard/team');
            } catch (err) {
                console.error(err);
                toast.error("you couldnt join the team !", {
                    position: "bottom-right"
                  });
            }
            // navigate('/dashboard');
        } 
    }

    let location = useLocation();

    useEffect(() => {
        const values = queryString.parse(location.search);
        const team_name = values.team_name ? values.team_name : null;
        const event_name = values.event_name ? values.event_name : null;
        const member_email = values.member_email ? values.member_email : null;

        setTeamName(team_name);
        setEventName(event_name);
        setMember1(member_email);
        
        if(userDetails && userDetails?.profile?.email != member_email) {
            navigate('/dashboard');
            // console.log(`comparison : ${userDetails.profile.email === member_email}`)
        }

    },[userDetails])

    return (
        <>
            <Background />
    
            <div class="event-registration-container">
                <div class="card-header-registration">
                    <h2>{teamName}</h2>
                </div>
                <div class="card-header-registration">
                    <h3>{eventName}</h3>
                </div>


                <div class="card-body-registration">
                    <h4 class="card-title-registration">Team Invitation</h4>
                    {/* <p class="card-text">You have been invited to join <strong>{teamName}</strong> in <strong>{eventName}</strong> by <strong>{leader}</strong></p> */}
                    <h5 class="card-text-registration">You have been invited to join <span className="registration-bold-text">{teamName}</span> in <span className="registration-bold-text">{eventName}</span></h5>
                {/* <ul class="list-group list-group-flush">
                    <li class="list-group-item">{leader}</li>
                    <li class="list-group-item">{member1}</li>
                    <li class="list-group-item">{member2}</li>
                </ul> */}
                    <div class="btn-container-registration">
                        <button class="btn-registration btn-success-registration btn-round-2-registration" onClick={() => handleSubmit()}>Accept</button>
                        <button class="btn-registration btn-danger-registration btn-round-2-registration" onClick={() => navigate('/dashboard')}>Deny</button>
                    </div>
                </div>
            </div>
            
            {/* <div class="card event-registration-container">
                <div class="card-header">
                    <h1>{teamName}</h1>
                </div>
                <div class="card-header">
                    <h2>{eventName}</h2>
                </div>


                <div class="card-body">
                    <h5 class="card-title">Team Invitation</h5> */}
                    {/* <p class="card-text">You have been invited to join <strong>{teamName}</strong> in <strong>{eventName}</strong> by <strong>{leader}</strong></p> */}
                    {/* <p class="card-text">You have been invited to join <strong>{teamName}</strong> in <strong>{eventName}</strong></p>
                </div> */}
                {/* <ul class="list-group list-group-flush">
                    <li class="list-group-item">{leader}</li>
                    <li class="list-group-item">{member1}</li>
                    <li class="list-group-item">{member2}</li>
                </ul> */}
                {/* <div class="card-body">
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-success" type="button" onClick={() => routeChange()}>Accept</button>
                        <button class="btn btn-danger" type="button" onClick={() => routeChange()}>Deny</button>
                    </div>
                </div>
            </div> */}

        </>
    );
};
export default EventRegistration;
