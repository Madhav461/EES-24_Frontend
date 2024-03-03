import React from "react";
import { useState, useEffect } from "react";
import Navhome from "./navhome";
import { useSpring, animated } from "react-spring";
import "./DashboardTeam.css";
import { useNavigate } from "react-router-dom";

const DashboardTeam = () => {
    const [teamName, setTeamName] = useState("My Team");
    // const [teamName1, setTeamName1] = useState("My Team 1");
    // const [teamName2, setTeamName2] = useState("My Team 2");
    // const [teamName3, setTeamName3] = useState("My Team 3");
    const [eventName, setEventName] = useState("Devbits");
    const [leader, setLeader] = useState("Leader");
    const [member1, setMember1] = useState("Member1");
    const [member2, setMember2] = useState("Member2");
    // const [radiniteScore, setRadiniteScore] = useState(95);
    // const { number } = useSpring({
    //     from: { number: 0 },
    //     number: radiniteScore,
    //     delay: 200,
    //     config: { mass: 1, tension: 20, friction: 10 },
    // });

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = `/dashboard/team/${route}`;
        navigate(path);
    }

    const teamDetails = [
        { teamName: "TeamDummy", eventName: "Dummy", leader: "Santosh", member1: "Dummy", member2: "Dummy" },
        { teamName: "TeamDummy", eventName: "Dummy", leader: "Santosh", member1: "Dummy", member2: "Dummy" },
        { teamName: "Team1", eventName: "DEVBITS", leader: "L1", member1: "M11", member2: "M12" },
        { teamName: "Team2", eventName: "MOSAIC", leader: "L2", member1: "M21", member2: "M22" },
        { teamName: "Team3", eventName: "CASSANDRA", leader: "L3", member1: "M31", member2: "M32" },
        { teamName: "Team4", eventName: "CASSANDRA", leader: "L3", member1: "M31", member2: "M32" },
        { teamName: "Team5", eventName: "CASSANDRA", leader: "L3", member1: "M31", member2: "M32" },
        { teamName: "Team6", eventName: "CASSANDRA", leader: "L3", member1: "M31", member2: "M32" },
        { teamName: "Team7", eventName: "CASSANDRA", leader: "L3", member1: "M31", member2: "M32" },
    ];

    const changeTeam = (id) => {
        setTeamName(teamDetails[id].teamName);
        setEventName(teamDetails[id].eventName);
        setLeader(teamDetails[id].leader);
        setMember1(teamDetails[id].member1);
        setMember2(teamDetails[id].member2);
    };

    const teamsRegistered = teamDetails.map((teamInfo, ind) => {
        return (
            <div className="team-name-dashboard" key={ind} onClick={() => changeTeam(ind)}>{teamInfo.teamName}</div>
        )
    });

    return (
        <>
            <div className="spacer-tmp">
                hello
            </div>

            {/* Added by Santosh - Desktop view */}
            <div className="relative team-dashboard-container">

                <div className="teams-registered-dashboard">
                    {teamsRegistered}
                </div>

                <div className="team-dashboard-members">
                    <div className="team-dashboard-teamName-display">{teamName}</div>
                    <div className="team-dashboard-eventName-display">{eventName}</div>
                    <div className="team-dashboard-members-names">
                        <div>Leader</div>
                        <div>{leader}</div>
                    </div>
                    <div className="team-dashboard-members-names">
                        <div>Member 1</div>
                        <div>{member1}</div>
                    </div>
                    <div className="team-dashboard-members-names">
                        <div>Member 2</div>
                        <div>{member2}</div>
                    </div>
                    <div className="team-dashboard-members-names">
                        <img className="team-dashboard-icons" src="/dashboard-team-edit.svg" alt="" onClick={() => routeChange("edit")} />
                        <img className="team-dashboard-icons" src="/dashboard-team-delete.svg" alt="" />
                    </div>
                </div>

                {/* <div className="team-dashboard-radinite">
                    <animated.span className="">
                        {number.to((radiniteScore) => radiniteScore.toFixed(0))}
                    </animated.span>
                    <img
                        className="radinite-logo-dashboard"
                        src="/radinite.svg"
                        alt="radinite"
                    />
                </div> */}
            </div>
            {/* Added by Santosh - Desktop view */}

            <div className="spacer-tmp">
                hello
            </div>

            {/* Added by Santosh - Mobile view */}
            {/* <div
                className="dashboard-background-mb absolute"
                style={{
                    left: "50%",
                    transform: "translateX(-50%) translateY(-30%)",
                    top: "50%",
                }}
            > */}
            <div>
                <div className="upper-dashboard-mb">
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper2" src="/dmbupper2.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                    <img className="dmb-upper dmb-upper1" src="/dmbupper1.svg" />
                </div>

                <div className="container-dashboard-mb">
                    <div className="name-dashboard-team-mb">
                        {/* <div className="team-dashboard-teamName-display">{teamName1}</div> */}
                        {teamName}
                    </div>
                    <div className="p1-dashboard-team-mb">

                        {/* <div className="team-dashboard-members"> */}
                        <div className="team-dashboard-eventName-display">{eventName}</div>
                        <div className="team-dashboard-members-names">
                            <div>Leader</div>
                            <div>{leader}</div>
                        </div>
                        <div className="team-dashboard-members-names">
                            <div>Member 1</div>
                            <div>{member1}</div>
                        </div>
                        <div className="team-dashboard-members-names">
                            <div>Member 2</div>
                            <div>{member2}</div>
                        </div>
                        {/* </div> */}
                    </div>

                    {/* <div className="radinite-dashboard-mb">
                        <div>{radiniteScore}</div>
                        Radinite
                    </div>

                    <img
                        className="radinite-logo-dashboard-mb"
                        src="/radinite.svg"
                        alt="radinite"
                    /> */}
                </div>

                <div className="lower-dashboard-mb">
                    <img className="dmb-lower dmb-lower1" src="/dmblower1.svg" />
                    <img className="dmb-lower dmb-lower1" src="/dmblower1.svg" />
                    <img className="dmb-lower dmb-lower1" src="/dmblower1.svg" />
                    <img className="dmb-lower dmb-lower1" src="/dmblower1.svg" />
                    <img className="dmb-lower dmb-lower3" src="/dmblower3.svg" />
                    <img className="dmb-lower dmb-lower2" src="/dmblower2.svg" />
                    <img className="dmb-lower dmb-lower2" src="/dmblower2.svg" />
                    <img className="dmb-lower dmb-lower2" src="/dmblower2.svg" />
                    <img className="dmb-lower dmb-lower2" src="/dmblower2.svg" />
                </div>
            </div>
            {/* Added by Santosh - Mobile view */}

        </>
    );
};
export default DashboardTeam;
