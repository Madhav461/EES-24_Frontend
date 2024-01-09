import React from "react";
import Navhome from "./navhome";
import { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {

    const [name, setName] = useState("Name");
    const [mobile, setMobile] = useState("123456789");
    const [email, setEmail] = useState("email@itbhu.ac.in");
    const [branch, setBranch] = useState("Electronics Engineering");
    const [college, setCollege] = useState("IIT(BHU), Varanasi");
    const [radiniteScore, setRadiniteScore] = useState("95");

    return (
        <>
            <div className="relative">

                {/* <div className="absolute top-[0] "><Navhome /></div> */}

                <div className="h-[100vh] overflow-hidden">
                    <img className=" width-[100vw] mt-[-1330px] object-cover" src="/image 50.svg" style={{ mixBlendMode: 'overlay' }} />
                </div>

                <div className="absolute w-[83.3%] h-[46%] top-[39%] " style={{ left: '50%', transform: 'translateX(-50%)', background: 'rgba(255, 255, 255, 0.05)', border: '1px white solid', backdropFilter: 'blur(20.50px)' }}>

                    <div className="dashboard-background">
                        <div className="container-dashboard">
                            <div className="heading-dashboard">
                                <img className="dhi" src="dashboardheading2.svg" />
                                <img className="dhi dhi-1" src="dashboardheading.svg" />
                                <img className="dhi dhi-2" src="dashboardheading.svg" />
                                <img className="dhi dhi-3" src="dashboardheading.svg" />
                                <img className="dhi dhi-4" src="dashboardheading.svg" />
                                <img className="dhi dhi-5" src="dashboardheading.svg" />
                                <div className="heading-text-dashboard">GRADE 1</div>
                                <img className="dhi dhi-11" src="dashboardheading.svg" />
                                <img className="dhi dhi-12" src="dashboardheading.svg" />
                            </div>

                            <div className="details-dashboard">
                                <div className="name-dashboard">{name}</div>
                                <div className="p1-dashboard">
                                    <div>{college}</div>
                                    <div>{mobile}</div>
                                </div>
                                <div className="p2-dashboard">
                                    <div>{branch}</div>
                                    <div>{email}</div>
                                </div>
                            </div>

                            <img
                                className="radinite-logo-dashboard"
                                src="radinite.svg"
                                alt="radinite"
                            />
                            {/* <div className="score-logo-dashboard">
                    <img
                        src="dashboardeclipse.svg"
                        className="eclipse-dashboard"
                        alt=""
                    />
                    
                </div> */}
                            <div className="radinite-dashboard">
                                <div>{radiniteScore}</div>
                                Radinite
                            </div>

                            {/* <img
                    src="dashboardblack.svg"
                    className="dashboard-background-image"
                /> */}

                        </div>
                    </div>

                </div>

                {/* 16)h-[17%] */}

                <div className="absolute top-[13.5%] w-[78%] h-[6vw]  flex " style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', left: '50%', transform: 'translateX(-50%)' }}>
                    <div className="w-[10.17%] ">
                        <img src="/Vector 347.svg" alt="img" className="w-[100%]" />
                    </div>
                    <div style={{ height: '100%', textAlign: 'center', color: 'white', fontSize: '2.1vw', fontFamily: 'Michroma', fontWeight: '400', letterSpacing: 2.70, wordWrap: 'break-word', display: 'flex', alignItems: 'end', justifyContent: 'center' }}>
                        <div className="relative">
                            <img src="/Vector_347.svg" alt="img" className="absolute left-[-14%] top-[-27%] " />
                            <img src="/Vector 349.svg" alt="img" className="absolute right-[-14%] top-[-27%] " />
                            <img src="/Vector 348.svg" alt="img" className="absolute right-[-14%] bottom-[-27%] " />
                            <img src="/Vector 350.svg" alt="img" className="absolute left-[-14%] bottom-[-27%] " />
                            PROFILE
                        </div>
                    </div>
                    <div className="w-[10.17%]  ">
                        <img src="/Vector 346.svg" alt="img" className="w-[100%]" />
                    </div>
                </div>

            </div>

        </>
    );
};
export default Dashboard;

