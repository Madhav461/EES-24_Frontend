import React from "react";
import { useState, useEffect } from "react";
import Navhome from "./navhome";
import { useSpring, animated } from "react-spring";
import "./DashboardTeam.css";
import { useNavigate } from "react-router-dom";
import "./EventRegistration.css";
import "./EventRegistrationMobile.css";
import "./ForgotPassword.css";

const EventRegistrationMobile = () => {
    const [teamName, setTeamName] = useState("");
    const [eventName, setEventName] = useState("");
    const [leader, setLeader] = useState("santosh@itbhu.ac.in");
    const [member1, setMember1] = useState("");
    // const [member2, setMember2] = useState("");

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = `/dashboard/team/${route}`;
        navigate(path);
    };

    const changeEvent = (id) => {
        setEventName(eventNames[id]);
    };
    const handleMem1Change = (event) => {
        setMember1(event.target.value);
    };
    // const handleMem2Change = (event) => {
    //     setMember2(event.target.value);
    // };
    const handleTeamChange = (event) => {
        setTeamName(event.target.value);
    };

    const eventNames = [
        "DEVBITS", "MOSAIC", "CASSANDRA", "X-IOTA", "DIGISIM", "FUNCKIT", "COMMNET", "I-CHIP",
    ];

    // const eventsDisplay = eventNames.map((eventName, ind) => {
    //     return (
    //         <div className="team-name-dashboard" key={ind} onClick={() => changeEvent(ind)}>{eventName}</div>
    //     )
    // });

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    const handleBtnClick = (id) => {
        const targetDiv = document.getElementById(id);
        targetDiv.style.display = "block";
        // console.log(id);
        // if (targetDiv.style.display !== "none") {
        //     targetDiv.style.display = "none";
        // } else {
        //     targetDiv.style.display = "block";
        // }
    };

    return (
        <>
            {/* Added by Santosh - Mobile view */}

            {/* <div>
                <div className="upper-dashboard-mb">
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper2" src="/dmbupper2.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                </div>

                <div className="container-dashboard-mb">
                    <div className="name-dashboard-team-mb EventRegistrationMobile-upper">
                        <div>Event Registration</div>
                        <div>
                            <select class="select-css-event">
                                <option key={0} onClick={() => changeEvent(0)}>DEVBITS</option>
                                <option key={1} onClick={() => changeEvent(1)}>MOSAIC</option>
                                <option key={2} onClick={() => changeEvent(2)}>CASSANDRA</option>
                                <option key={3} onClick={() => changeEvent(3)}>X-IOTA</option>
                                <option key={4} onClick={() => changeEvent(4)}>DIGISIM</option>
                                <option key={5} onClick={() => changeEvent(5)}>FUNCKIT</option>
                                <option key={6} onClick={() => changeEvent(6)}>COMMNET</option>
                                <option key={7} onClick={() => changeEvent(7)}>I-CHIP</option>
                            </select>
                        </div>
                    </div>

                    <form onSubmit={handleFormSubmit} className="">
                        <div className="p1-dashboard-team-mb p1-dashboard-team-mb-overrite">


                            <div className="team-dashboard-eventName-display">{teamName}</div>
                            <div className="team-dashboard-members-names">
                                <div>Leader</div>
                                <div>{leader}</div>
                            </div>
                            <div className="team-dashboard-members-names">
                                <div>Member 1</div>
                                <input type="email" name="mem1_email" id="mem1_email" className="input" value={member1} onChange={handleMem1Change} />
                            </div>
                            <div className="team-dashboard-members-names">
                                <div>Member 2</div>
                                <input type="email" name="mem2_email" id="mem2_email" className="input" value={member2} onChange={handleMem2Change} />
                            </div>

                        </div>
                        <div class="btn-container-registration">
                            <button class="btn-registration btn-success-registration btn-round-2-registration" onClick={() => routeChange()}>Accept</button>
                            <button class="btn-registration btn-danger-registration btn-round-2-registration" onClick={() => routeChange()}>Deny</button>
                        </div>
                    </form>

                </div>

            </div> */}
            {/* Added by Santosh - Mobile view */}

            <div className="upper-dashboard-mb">
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper2" src="/dmbupper2.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
            </div>
            <form onSubmit={handleFormSubmit} className="">
            <div class="forgot-password-container">
                <h1>Event Registration</h1>
                <h2 class="information-text-fp">Select an event</h2>
                <h3 class="information-text-fp-success" id="fp-success">Your team has been successfully registered.</h3>        
                <div className="event-registration-dropd">
                    <select class="select-css-event">
                        <option key={0} onClick={() => changeEvent(0)}>DEVBITS</option>
                        <option key={1} onClick={() => changeEvent(1)}>MOSAIC</option>
                        <option key={2} onClick={() => changeEvent(2)}>CASSANDRA</option>
                        <option key={3} onClick={() => changeEvent(3)}>X-IOTA</option>
                        <option key={4} onClick={() => changeEvent(4)}>DIGISIM</option>
                        <option key={5} onClick={() => changeEvent(5)}>FUNCKIT</option>
                        <option key={6} onClick={() => changeEvent(6)}>COMMNET</option>
                        <option key={7} onClick={() => changeEvent(7)}>I-CHIP</option>
                    </select>
                </div>
                <div className="event-registration-leader">
                    <span>Leader</span>
                    <span>{leader}</span>
                </div>
                <div class="form-group-fp">                    
                    <input type="text" name="team_name" id="team_name" className="input" value={teamName} onChange={handleTeamChange} />
                    <p><label for="team_name">Team Name</label></p>
                    <input type="email" name="mem1_email" id="mem1_email" className="input" value={member1} onChange={handleMem1Change} />
                    <p><label for="mem1_email">Add a Member</label></p>
                    {/* <input type="email" name="mem2_email" id="mem2_email" className="input" value={member2} onChange={handleMem2Change} />
                    <p><label for="mem2_email">Member 2 Email</label></p> */}
                    <button onClick={() => handleBtnClick("fp-success")}>Register</button>
                    <button onClick={() => handleBtnClick("fp-failure")}>Cancel</button>
                </div>
            </div>
        </form>

        </>
    );
};
export default EventRegistrationMobile;
