import React from "react";
import { useState, useEffect } from "react";
import Navhome from "./navhome";
import { useSpring, animated } from "react-spring";
import "./DashboardTeam.css";

const DashboardTeam = () => {
    const [teamName1, setTeamName1] = useState("My Team 1");
    const [teamName2, setTeamName2] = useState("My Team 2");
    const [teamName3, setTeamName3] = useState("My Team 3");
    const [eventName, setEventName] = useState("Devbits");
    const [leader, setLeader] = useState("Leader");
    const [member1, setmember1] = useState("Member1");
    const [member2, setmember2] = useState("Member2");
    const [radiniteScore, setRadiniteScore] = useState(95);
    const { number } = useSpring({
        from: { number: 0 },
        number: radiniteScore,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
        <>
            {/* Added by Santosh - Desktop view */}
            <div className="relative team-dashboard-container">

                <div className="team-dashboard-name">
                    <div>{teamName1}</div>
                    <div>{teamName2}</div>
                    <div>{teamName3}</div>
                </div>

                <div className="team-dashboard-members">
                    <div className="team-dashboard-teamName-display">{teamName1}</div>
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
                        <img className="team-dashboard-icons" src="/dashboard-team-edit.svg" alt="" />
                        <img className="team-dashboard-icons" src="/dashboard-team-delete.svg" alt="" />
                    </div>
                </div>

                <div className="team-dashboard-radinite">
                    {/* <div>Radinite</div> */}
                    <animated.span className="">
                        {number.to((radiniteScore) => radiniteScore.toFixed(0))}
                    </animated.span>
                    <img
                        className="radinite-logo-dashboard"
                        src="/radinite.svg"
                        alt="radinite"
                    />
                </div>
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
                    <div className="name-dashboard-mb">
                        {/* <div className="team-dashboard-teamName-display">{teamName1}</div> */}
                        {teamName1}
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

                    <div className="radinite-dashboard-mb">
                        <div>{radiniteScore}</div>
                        Radinite
                    </div>

                    <img
                        className="radinite-logo-dashboard-mb"
                        src="/radinite.svg"
                        alt="radinite"
                    />
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
