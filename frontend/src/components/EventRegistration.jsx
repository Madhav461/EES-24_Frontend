import React from "react";
import { useState, useEffect } from "react";
import Background from "./background";
import { useNavigate } from "react-router-dom";
import "./EventRegistration.css";

const EventRegistration = () => {

    const teamDetails = { teamName: "TeamName", eventName: "DEVBITS", leader: "Santosh", member1: "You", member2: "Unknown" };

    const [teamName, setTeamName] = useState(teamDetails.teamName);
    const [eventName, setEventName] = useState(teamDetails.eventName);
    const [leader, setLeader] = useState(teamDetails.leader);
    const [member1, setMember1] = useState(teamDetails.member1);
    const [member2, setMember2] = useState(teamDetails.member2);

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = `/dashboard`;
        navigate(path);
    }

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
                        <button class="btn-registration btn-success-registration btn-round-2-registration" onClick={() => routeChange()}>Accept</button>
                        <button class="btn-registration btn-danger-registration btn-round-2-registration" onClick={() => routeChange()}>Deny</button>
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
