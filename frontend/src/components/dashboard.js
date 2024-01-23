import React from "react";
import { useState, useEffect } from "react";
import Navhome from "./navhome";
import "./dashboard.css";

const Dashboard = () => {

    const [name, setName] = useState("Name");
    const [mobile, setMobile] = useState("123456789");
    const [email, setEmail] = useState("email@itbhu.ac.in");
    const [branch, setBranch] = useState("Electronics Engineering");
    const [college, setCollege] = useState("IIT(BHU), Varanasi");
    const [radiniteScore, setRadiniteScore] = useState("95");


    return (
        <div className="relative">
            
                 {/* <div className="absolute "><Navhome /></div>  */}
            
            {/* desktop view */}
            <div className="desktopview relative">

            <div className="bgimg h-[100vh] w-[100vw] overflow-hidden dashboard-custom-background">
                    <img className="object-cover w-[100%] " src="/image 50.svg" style={{ mixBlendMode: 'difference', filter: 'blur(3.0px)' }} />
                </div>

                {/* <div className="card absolute " style={{ left:'50%', transform:'translateX(-50%)', background: 'rgba(255, 255, 255, 0.05)', border: '1px white solid', backdropFilter: 'blur(20.50px)'}}>
       </div> */}
            
                {/* <santosh> */}
                <div className="dashboard-background card absolute" style={{ left: '50%', transform: 'translateX(-50%)', background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(20.50px)' }}>
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

                    <img
                        src=""
                        className="dashboard-background-image"
                    />

                </div>
                {/* </santosh> */}


                <div className="title_container absolute flex " style={{ flexDirection: 'row', alignItems: 'end', justifyContent: 'space-between', left: '50%', transform: 'translateX(-50%)' }}>
                    <div className=" h-[100%]">
                        <img src="/Vector 347.svg" alt="img" className="h-[100%]" />
                    </div>
                    <div style={{ height: '100%', textAlign: 'center', color: 'white', fontSize: '150%', fontFamily: 'Michroma', fontWeight: '400', letterSpacing: 3.0, wordWrap: 'break-word', display: 'flex', alignItems: 'end', justifyContent: 'center', height: "min-content" }}>
                        <div className="absolute left-[40%]">
                            <img src="/Vector_347.svg" alt="img" className="absolute left-[-14%] top-[-27%] " />
                            <img src="/Vector 349.svg" alt="img" className="absolute right-[-14%] top-[-27%] " />
                            <img src="/Vector 348.svg" alt="img" className="absolute right-[-14%] bottom-[-27%] " />
                            <img src="/Vector 350.svg" alt="img" className="absolute left-[-14%] bottom-[-27%] " />
                            PROFILE
                        </div>
                    </div>
                    <div>
                       <img src="/Vector 375.svg" alt="img" className="absolute left-[12%] bottom-[-45%]" />
                       <img src="/Vector 376.svg" alt="img"  className="absolute left-[6%] bottom-[-45%]"/>
                       <img src="/Vector 377.svg" alt="img"  className="absolute left-[0%] bottom-[-45%]"/>
                       <img src="/Vector 374.svg" alt="img"  className="absolute left-[18%] bottom-[-45%]"/>
                    </div> 
                    <div>
                        <img src="/Group 329.svg" alt="img" className="absolute right-[0%] bottom-[-45%]"/>
                        <img src="/Group 186.svg" alt="img" className="absolute right-[1.5%] bottom-[-43%]" />
                        <img src="/Group 332.svg" alt="img" className="absolute right-[13%] bottom-[-43%]" />
                    </div>
                    <div className="h-[100%]  ">
                        <img src="/Vector 346.svg" alt="img" className="h-[100%]" />
                    </div>
                </div>

            </div>

            {/* Mobile view */}
            <div className=" mobileview relative flex flex-col  overflow-hidden" style={{ height: '100vh' }}>

                {/* background image */}
                <div className="bgimage absolute w-[100vw] overflow-hidden dashboard-custom-background">
                    <img className="w-[100%]" src="/Android Large - 5.svg" style={{ mixBlendMode: 'difference', filter: 'blur(1.0px)' }} />
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

                <div className="center_group absolute top-[30vw] w-[70vw]  flex" style={{ height: '10vw', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', left: '50%', transform: 'translateX(-50%)', zIndex: '10', }}>

                    <div className="profile relative" style={{ textAlign: 'center', color: 'white', fontSize: '3.5vw', fontFamily: 'Michroma', fontWeight: '400', letterSpacing: '1.5vw', wordWrap: 'break-word' }}>
                        <img src="/Group 335.svg" alt="img" className="absolute left-[-65%]  h-[300%]" style={{ top: '50%', transform: 'translateY(-50%)' }} />
                        <img src="/Group 334.svg" alt="img" className="absolute right-[-65%] h-[300%]" style={{ top: '50%', transform: 'translateY(-50%)' }} />
                        PROFILE
                    </div>

                </div>

                <div className="main_card relative" style={{ height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center', top: '50%', transform: 'translateY(-50%)' }}>
                    <div className=" h-[100%] overflow-hidden dashboard-custom-background " >
                        <img className="card_image absolute w-[90%]" src="/Vector 401.svg" style={{ mixBlendMode: 'difference', left: '50%', transform: 'translateX(-50%)' }} />
{/* Added by Santosh */}
<div className="dashboard-background-mb absolute" style={{left: '50%', transform: 'translateX(-50%) translateY(-30%)',top: '50%'}}>
<div className="upper-dashboard-mb">
    <img className="dmb-upper dmb-upper1" src="dmbupper1.svg" />
    <img className="dmb-upper dmb-upper1" src="dmbupper1.svg" />
    <img className="dmb-upper dmb-upper2" src="dmbupper2.svg" />
    <img className="dmb-upper dmb-upper1" src="dmbupper1.svg" />
    <img className="dmb-upper dmb-upper1" src="dmbupper1.svg" />
</div>

<div className="container-dashboard-mb">
    <div className="name-dashboard-mb">{name}</div>
    <div className="p1-dashboard-mb">
        <div>{college}</div>
        <div>{branch}</div>
        <div>{email}</div>
        <div>{mobile}</div>
    </div>

    <div className="radinite-dashboard-mb">
        <div>{radiniteScore}</div>  
        Radinite  
    </div>

    <img
    className="radinite-logo-dashboard-mb"
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
</div>

<div className="lower-dashboard-mb">
    <img className="dmb-lower dmb-lower1" src="dmblower1.svg" />
    <img className="dmb-lower dmb-lower1" src="dmblower1.svg" />
    <img className="dmb-lower dmb-lower1" src="dmblower1.svg" />
    <img className="dmb-lower dmb-lower1" src="dmblower1.svg" />
    <img className="dmb-lower dmb-lower3" src="dmblower3.svg" />
    <img className="dmb-lower dmb-lower2" src="dmblower2.svg" />
    <img className="dmb-lower dmb-lower2" src="dmblower2.svg" />
    <img className="dmb-lower dmb-lower2" src="dmblower2.svg" />
    <img className="dmb-lower dmb-lower2" src="dmblower2.svg" />

</div>

</div>
{/* Added by Santosh */}

                    </div>
                </div>

                {/* my general doubt : transform in X&Y direc , same div mein kaam kyu nhi kr rhe like placing that content of 76 into 72 ,anyways let it go*/}

                <div className="buttons absolute flex flex-row justify-between w-[90vw] bottom-[10%] h-[12.5vw]" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                    <div className="h-[100%]">
                        <img src="/Vector 390.svg" alt="img" className=" h-[100%]" />
                        <img src="/Vector 416.svg" alt="img" className=" h-[40%] absolute left-[5px] top-[25%] " />
                    </div>
                    <img src="/Vector 391.svg" alt="img" className=" h-[100%]" />
                    <div className="h-[100%]">
                        <img src="/Vector 402.svg" alt="img" className=" h-[100%]" />
                        <img src="/Vector 417.svg" alt="img" className=" h-[40%] absolute right-[5px] top-[25%]" />
                    </div>
                </div>

            </div>
        </div>
    );
};
export default Dashboard;


