import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Navhome from "./navhome";
import { useSpring, animated } from "react-spring";
import "./dashboard.css";
import AuthContext from "../context/AuthContext";

function getOrdinal(year) {
  let n = parseInt(year)
  let ord = 'th';
  if (n % 10 == 1 && n % 100 != 11)
  {
    ord = 'st';
  }
  else if (n % 10 == 2 && n % 100 != 12)
  {
    ord = 'nd';
  }
  else if (n % 10 == 3 && n % 100 != 13)
  {
    ord = 'rd';
  }
  return ord;
}

const Dashboard = () => {
  const {user, authTokens, userDetails} = useContext(AuthContext)
  const [name, setName] = useState("Abhinav");
  // const [mobile, setMobile] = useState("123456789");
  const [email, setEmail] = useState("email@itbhu.ac.in");
  // const [branch, setBranch] = useState("Electronics Engineering");
  const [college, setCollege] = useState("IIT(BHU), Varanasi");
  const [year, setYear] = useState('1')
  const { number } = useSpring({
    from: { number: 0 },
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  useEffect(() => {
    if(userDetails) {
      setName(userDetails?.profile?.name)
      setEmail(userDetails?.profile?.email)
      setCollege(userDetails?.profile?.college)
      setYear(userDetails?.profile?.year)
    }
  }, [userDetails])
  return (
    <div className="relative">
      <div className="absolute ">
      <Navhome className="z-10"/>
      </div>
      {/* desktop view */}
      <div className="dash_desktopview relative overflow-hidden z-[-1]">
      
        <div className="bgimg h-[100vh] w-[100vw]  overflow-hidden dashboard-custom-background">
      

          <img
            className="object-cover w-[100%] "
            src="/image 50.svg"
            style={{ mixBlendMode: "difference", filter: "blur(3.0px)" }}
          />
          
        </div>

        {/* <div className="card absolute " style={{ left:'50%', transform:'translateX(-50%)', background: 'rgba(255, 255, 255, 0.05)', border: '1px white solid', backdropFilter: 'blur(20.50px)'}}>
       </div> */}

        {/* <santosh> */}
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
              src="/Vector 354 (2).svg"
              className="dashboard-background-image  object-cover w-full h-full  p-0"
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
                 {/* {email && email?.length <= 40 ? email : `${email?.substring(0,40)}...`} */}</span> 
              </p>
              <p className="y49">
                {/* <span
                  type="text"
                  name="Electronics"
                  id="Electronics"
                  placeholder="Electronics Engineering"
                  value={branch}
                  disabled="true"
                >{branch}</span> */}
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
                >{year + getOrdinal(year)} Year</span>
              </p>
              <p className="yashtheman">GRADE {year}</p>
              <img src="/motiline.svg" alt="" class="y29" />
            </div>
          </div>
          <div className="container-dashboard absolute">
            <div className="heading-dashboard">
              <img className="dhi " src="dashboardheading2.svg" />
              <img className="dhi dhi-1" src="dashboardheading.svg" />
              <img className="dhi dhi-2" src="dashboardheading.svg" />
              <img className="dhi dhi-3" src="dashboardheading.svg" />
              <img className="dhi dhi-4" src="dashboardheading.svg" />
              <img className="dhi dhi-5" src="dashboardheading.svg" />
              <div className="heading-text-dashboard">GRADE {year}</div>
              <img className="dhi dhi-11" src="dashboardheading.svg" />
              <img className="dhi dhi-12" src="dashboardheading.svg" />
              {/* {<span className="y69 ">{radiniteScore}</span>} */}
            
            </div>

            <div className="details-dashboard">
              <div className="name-dashboard">{name}</div>
              <div className="p1-dashboard">
                <div>{college}</div>
                {/* <div>{mobile}</div> */}
              </div>
              <div className="p2-dashboard">
                {/* <div>{branch}</div> */}
                 <div> {/*{email.length <=30 ? email : `${email.substring(0,30)}...`}*/}{email} </div> 
              </div>
              {/* {<span className="y69 ">{radiniteScore}</span>} */}
           
            </div>
           
            {/* <div className="score-logo-dashboard">
                            <img
                                src="dashboardeclipse.svg"
                                className="eclipse-dashboard"
                                alt=""
                            />
                        </div> */}
          </div>

          {/* <img src="" className="dashboard-background-image" /> */}
        </div>
        {/* </santosh> */}

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
          <div className=" h-[80%]  ">
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
            <div className="relative  "style={{ fontSize: '30px', marginTop: '8%'}}>
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
      </div>

      {/* Mobile view */}
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
            <div
              className="dashboard-background-mb absolute"
              style={{
                left: "50%",
                transform: "translateX(-50%) translateY(-30%)",
                top: "50%",
              }}
            >
              <div className="upper-dashboard-mb">
                <img className="dmb-upper dmb-upper1" src="dmbupper1.svg" />
                <img className="dmb-upper dmb-upper1" src="dmbupper1.svg" />
                <img className="dmb-upper dmb-upper2" src="dmbupper2.svg" />
                <img className="dmb-upper dmb-upper1" src="dmbupper1.svg" />
                <img className="dmb-upper dmb-upper1" src="dmbupper1.svg" />
              </div>

              <div className="container-dashboard-mb" >
                <div className="name-dashboard-mb">{name}</div>
                <div className="p1-dashboard-mb">
                  <div>{college}</div>
                  {/* <div>{branch}</div> */}
                  <div style={{"fontSize":"85%"}}>{email}{/* email.length <=15 ? email : `${email.substring(0,15)}...`*/}</div>
                  {/* <div>{mobile}</div> */}
                </div>

                

               
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
      </div>
    </div>
  );
};
export default Dashboard;