import React from "react";
import { useState, useEffect } from "react";
import Navhome from "./navhome";
import { useSpring, animated } from "react-spring";
import "./DashboardTeam.css";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

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

    const [name, setName] = useState("Abhinav");
    const [email, setEmail] = useState("email@itbhu.ac.in");
    const [branch, setBranch] = useState("Electronics Engineering");
    const [college, setCollege] = useState("IIT(BHU), Varanasi");
    
  

    let navigate = useNavigate();
    const routeChange = (route) => {
        let path = `/dashboard/team/${route}`;
        navigate(path);
    }

    const teamDetails = [
        // { teamName: "TeamDummy", eventName: "Dummy", leader: "Santosh", member1: "Dummy", member2: "Dummy" },
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

    // const teamsRegistered = teamDetails.map((teamInfo, ind) => {
    //     return (
    //         <div className="team-name-dashboard" key={ind} onClick={() => changeTeam(ind)}>{teamInfo.teamName}</div>
    //     )
    // });
    const teamsRegistered = teamDetails.map((teamInfo, ind) => {
        return (
            <ul className="team-name-dashboard" key={ind} onClick={() => changeTeam(ind)}>{teamInfo.teamName}</ul>
        )
    });

    return (
        <div className="relative ">
        <div className="absolute ">
        <Navhome className="z-15"/>
        </div>
        {/* desktop view starts here*/}
        <div className="dash_desktopview relative overflow-hidden z-10">
        
          <div className="bgimg h-[100vh] w-[100vw] overflow-hidden dashboard-custom-background">
            <img
              className="object-cover w-[100%] "
              src="/image 50.svg"
              style={{ mixBlendMode: "difference", filter: "blur(3.0px)" }}
            />
          </div>
  
          {/* <div className="card absolute " style={{ left:'50%', transform:'translateX(-50%)', background: 'rgba(255, 255, 255, 0.05)', border: '1px white solid', backdropFilter: 'blur(20.50px)'}}>
         </div> */}
  
      
  
          {/* </santosh> */}
  
          <div
          className="dashboard-background  card absolute"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            // background: "rgba(255, 255, 255, 0.05)",
            top:'35%',
            marginTop:"-1%",
          }}
        >
          <div className="abhinav absolute">

            <img src="/dashboard_topelem.svg" className="w-[16%] mb-[-15px] ml-[20px]"></img>
          <div className="flex">
            <img
              src="/dashboardblack.svg"
              className="dashboard-background-image mt-[-16px] object-cover w-full h-full p-0"
            />
             <img src="/dashboard_sideelem.svg" className="md:w-[14px] w-[40px] md:mb-[60px] mb-[20px] mt-[-60px] ml-[-15px]"></img>
            </div>

<div className="y19">
              {" "}
              <img src="/dash.svg" alt="" className="y56" />
              <p className="y39">
                <span
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder="NAME"
                  value={name}
                  disabled="true"
                >{name}</span>{" "}
                <span
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="email@itbhu.ac.in"
                  value={email}
                  disabled="true">
                 {email.length <=40 ? email : `${email.substring(0,40)}...`}</span>
              </p>
              <p className="y49">
                <span
                  type="text"
                  name="Electronics"
                  id="Electronics"
                  placeholder="Electronics Engineering"
                  value={branch}
                  disabled="true"
                >{branch}</span>
                <span
                  type="text"
                  name="College"
                  id="College"
                  placeholder="IIT BHU Varanasi"
                  value={college}
                  disabled="true"
                >{college}</span>{" "}
                <span
                  type="text"
                  name="Year"
                  id="Year"
                  placeholder="Ist Year"
                >Ist Year</span>
              </p>
              <p className="yashtheman">GRADE 1</p>
              <img src="/motiline.svg" alt="" class="y29" />
            </div>

          </div>
</div>

{/* Parth - upper Title box and svg  */}
          <div
            className="title_container absolute flex "
            style={{
              flexDirection: "row",
              alignItems: "end",
              justifyContent: "space-between",
              left: "50%",
              transform: "translateX(-50%)",
              marginTop: "-2%",
            }}
          >
            <div className=" h-[80%] ">
              <img src="/Vector 347.svg" alt="img" className="h-[100%]" />
            </div>
            <div
              style={{
                height: "100%",
                textAlign: "center",
                color: "white",
                fontSize: "150%",
                fontFamily: "Michroma",
                fontWeight: "400",
                letterSpacing: 3.0,
                wordWrap: "break-word",
                display: "flex",
                alignItems: "end",
                justifyContent: "center",
                height: "min-content",
              }}
            >
              <div className="relative "style={{ fontSize: '30px', marginTop: '8%'}}>
                <img
                  src="/Vector_347.svg"
                  alt="img"
                  className="absolute left-[-14%] top-[-24%] "
                />
                <img
                  src="/Vector 349.svg"
                  alt="img"
                  className="absolute right-[-14%] top-[-24%] "
                />
                <img
                  src="/Vector 348.svg"
                  alt="img"
                  className="absolute right-[-14%] bottom-[-24%] "
                />
                <img
                  src="/Vector 350.svg"
                  alt="img"
                  className="absolute left-[-14%] bottom-[-24%] "
                />
                PROFILE
              </div>
            </div>
            <div className="h-[80%] ">
              <img src="/Vector 346.svg" alt="img" className="h-[100%]" />
            </div>
          </div>



        {/* Added by Santosh -inner content Desktop view */}
        <div
        className=" absolute team-dashboard-container  z-50"
              style={{
                left: "50%",
                transform: "translateX(-50%) translateY(-35%)",
                top: "50%",
              }}
              >
<div className="teams-registered-dashboard">
  <ul>
    {teamsRegistered}
    </ul>
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
        <img className="team-dashboard-icons" src="/dashboard-team-delete.svg" alt="" onClick={() => routeChange("edit")}/>
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

    {/* Added by Santosh - Desktop view -close*/}

</div>

{/* end of desktop view */}

{/* Mobile view starts here */}

            <div
        className=" dash_mobileview relative flex flex-col  overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* background image */}
        <div className="bgimage absolute w-[100vw] overflow-hidden dashboard-custom-background">
          <img
            className="w-[100%]"
            src="/Android Large - 5.svg"
            style={{ mixBlendMode: "difference", filter: "blur(1.0px)" }}
          />
        </div>
        {/* clipPath:'polygon(27%,36% 97.5%,36% 97.5%,94% 27%,94%)' , transform:'scale(0.15)',transform:'translateX(-50%)' , */}

        <div className="side_svgs leftsvgs absolute left-[4%] top-[7%] flex flex-col w-[3%] ">
          <img src="/Vector 384.svg" alt="img" className=" w-[100%]" />
          <img src="/Vector 387.svg" alt="img" className=" w-[100%]" />
          <img src="/Vector 388.svg" alt="img" className=" w-[100%]" />
          <img src="/Vector 386.svg" alt="img" className=" w-[100%]" />
        </div>
        <div className="side_svgs rightsvgs absolute right-[4%] top-[7%] flex flex-col w-[3%] ">
          <img src="/Vector 378.svg" alt="img" className=" w-[100%]" />
          <img src="/Vector 382.svg" alt="img" className=" w-[100%]" />
          <img src="/Vector 383.svg" alt="img" className=" w-[100%]" />
          <img src="/Vector 381.svg" alt="img" className=" w-[100%]" />
        </div>

        <div
          className="center_group absolute top-[30vw] w-[70vw]  flex"
          style={{
            height: "10vw",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: "10",
          }}
        >
          <div
            className="profile relative"
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "3.4vw",
              fontFamily: "Michroma",
              fontWeight: "400",
              letterSpacing: "1.5vw",
              wordWrap: "break-word",
            }}
          >
            <img
              src="/Group 335.svg"
              alt="img"
              className="absolute left-[-65%]  h-[300%]"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            />
            <img
              src="/Group 334.svg"
              alt="img"
              className="absolute right-[-65%] h-[300%]"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            />
            PROFILE
          </div>
        </div>

        <div
          className="main_card relative"
          style={{
            height: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <div className=" h-[100%] overflow-hidden dashboard-custom-background ">
            <img
              className="card_image absolute w-[90%]"
              src="/Vector 401.svg"
              style={{
                mixBlendMode: "difference",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            {/* Added by Santosh */}
           
            {/* Added by Santosh */}
          </div>
        </div>

        <div
          className="buttons absolute flex flex-row justify-between w-[90vw] bottom-[10%] h-[12.5vw]"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="h-[100%]">
            <img src="/Vector 390.svg" alt="img" className=" h-[100%]" />
            <img
              src="/Vector 416.svg"
              alt="img"
              className=" h-[40%] absolute left-[5px] top-[25%] "
            />
          </div>
          <img src="/Vector 391.svg" alt="img" className=" h-[100%]" />
          <div className="h-[100%]">
            <img src="/Vector 402.svg" alt="img" className=" h-[100%]" />
            <img
              src="/Vector 417.svg"
              alt="img"
              className=" h-[40%] absolute right-[5px] top-[25%]"
            />
          </div>
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
            <div className="dash-team-mobile-container absolute"
              style={{
                left: "50%",
                transform: "translateX(-50%) translateY(-30%)",
                top: "50%",
              }}>
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

      </div>
{/* end of mobile view */}

</div>
    );
};
export default DashboardTeam;
