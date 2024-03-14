
import React from "react";
import { useState, useEffect, useContext } from "react";

import Navhome from "./navhome";
import { useSpring, animated } from "react-spring";
import "./editdash.css";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
// <<<<<<< main

// const EditDashboard = () => {
//   const {userDetails} = useContext(AuthContext)
//   const [name, setName] = useState("Abhinav");
//   const [mobile, setMobile] = useState("123456789");
//   const [email, setEmail] = useState("email@itbhu.ac.in");
//   const [branch, setBranch] = useState("Electronics Engineering");
//   const [college, setCollege] = useState("IIT(BHU), Varanasi");
//   const [displayEmail, setDisplayEmail] = useState('') 
// =======
import Spinner from "./Spinner";

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

const EditDashboard = () => {
  const {userDetails, updateUserInfo, loadUser, pageloading} = useContext(AuthContext)
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [college, setCollege] = useState("");
  const [displayEmail, setDisplayEmail] = useState('')

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
      setDisplayEmail(userDetails?.profile?.email.substring(0, 30))
    }
  }, [userDetails])

  const handleSubmit = () => {
    const validatedformdata = {
      collegeName : college,
      name : name,
      year : year
    }
    console.log(validatedformdata)
    updateUserInfo(validatedformdata)
  }

  const handleCancel = () => {
    loadUser();
  }

  return (pageloading ? <Spinner /> :
    <div className="relative">
      <div className="absolute ">
        <Navhome className="z-10" />
      </div>
      {/* desktop view */}
      <div className="dash_desktopview relative overflow-hidden ">
        <div className="bgimg h-[100vh] w-[100vw] z-[-900] overflow-hidden dashboard-custom-background">
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
          className="dashboard-background dash-parth-card absolute"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            // background: "rgba(255, 255, 255, 0.05)",
            top: "35%",
            marginTop: "-1%",
          }}
        >
          <div className="abhinav absolute">
            <div
              className="button7071 "
              style={{ transform: "translateX(-50%)" }}
            >
              <Link to="/dashboard/registration" className="w-[18%] mt-[3.5px]">
                <img
                  src="/rightbutton.svg"
                  alt=""
                  className="rightbutton w-[100%]"
                />
              </Link>
              <img
                src="/middlebutton.svg"
                alt=""
                className="middlebutton w-[18.5%]"
              />
              <Link to="/dashboard/team" className="w-[18%] mt-[3.5px]">
                <img
                  src="/leftbutton.svg"
                  alt=""
                  className="leftbuttonw-[100%]"
                />
              </Link>
            </div>

            <div>
                <img
                  src="/dashboard_topelem.svg"
                  className="dash-top-elem w-[16%] mb-[-10px] ml-[20px]"
                ></img>
                <div className="flex">
                  <img
                    src="/dashboardblack.svg"
                    className="dashboard-background-image mt-[-16px] object-cover w-full h-full p-0"
                  />
                  <img
                    src="/dashboard_sideelem.svg"
                    className="dash-side-elem md:w-[14px] w-[40px] md:mb-[60px] mb-[20px] mt-[-60px] ml-[-15px]"
                  ></img>
                </div>
              </div>

              <div className="y19    ">
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
                >{name.length <=30?name:`${name.substring(0,25)}`}</span>{" "}
                <span
                  type="email"
                  name="Email"
                  id="Email"
                  placeholder="email@itbhu.ac.in"
                  value={email}
                  disabled="true">
                 {email && email.length <= 40 ? email : `${email?.substring(0,25)}...`}</span> 
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
            <div className="details-dashboard" style={{ zIndex: "1" }}>
              <div className="name99"><input type="text" className="name-dashboard" id="name2" placeholder={name} style={{ zIndex: "10000", "fontFamily": "Michroma" }} onChange={(event) => setName(event.target.value)} value={name}></input></div>
              <div className="college99"><input type="text" id="college2" placeholder={college} style={{ "fontFamily": "Michroma" }} onChange={(event) => setCollege(event.target.value)} value={college}></input></div>
              <div className="branch99" value={college}><input type="text" id="branch2" placeholder={year} style={{ "fontFamily": "Michroma" }} onChange={(e) => setYear(e.target.value)} value={year}></input></div>
              <div className="email99"><input type="email" id="email2" placeholder={email && email.length >= 40 ? displayEmail + '...' : displayEmail} disabled style={{ "fontFamily": "Michroma" }}></input></div>
              {/* {<span className="y69 ">{radiniteScore}</span>} */}
            </div>
            <button class="submit669 w-[20%] h-[10%] flex  items-center justify-evenly bg-white rounded-md" id="submitedit" onClick={handleSubmit}>Submit</button>
            <button class="cancel669 w-[20%] h-[10%] flex  items-center justify-evenly bg-white rounded-md" id="submitcancel" onClick={handleCancel}>Cancel</button>
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
            marginTop: "0%",
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
            <div
              className="relative "
              style={{ fontSize: "30px", marginTop: "8%" }}
            >
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
              EDIT PROFILE
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
              letterSpacing: "1.20vw",
              wordWrap: "break-word",
            }}
          >
            <img
              src="/Group 335.svg"
              alt="img"
              className="absolute left-[-35%]  h-[250%]"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            />
            <img
              src="/Group 334.svg"
              alt="img"
              className="absolute right-[-35%] h-[250%]"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            />
            EDIT PROFILE
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

              <div className="container-dashboard-mb">
                <div className="name-dashboard-mb"><input type="text" placeholder={name} style={{ "fontFamily": "Michroma" }} value={name} onChange={(e) => setName(e.target.value)}></input></div>
                <div className="p1-dashboard-mb">
                  <div><input type="text" placeholder={college} style={{ "fontFamily": "Michroma" }} value={college} onChange={(e) => setCollege(e.target.value)}></input></div>
                  <div><input type="text" placeholder={year} style={{ "fontFamily": "Michroma" }} value={year}onChange={(e) => setYear(e.target.value)}></input></div>
                  <div style={{ "fontSize": "85%" }}><input type="text" placeholder={email && email.length >= 40 ? displayEmail + '...' : displayEmail} disabled style={{ "fontFamily": "Michroma" }}></input></div>
                  <button class="submit669 w-[20%] h-[10%] flex  items-center justify-evenly bg-white rounded-md" id="submitedit" onClick={handleSubmit}>Submit</button>
                  <button class="cancel669 w-[20%] h-[10%] flex  items-center justify-evenly bg-white rounded-md" id="submitcancel" onClick={handleCancel}>Cancel</button>
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
          className="dash_mb_buttons absolute flex flex-row justify-between w-[90vw] bottom-[10%] h-[12.5vw]"
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <Link to="/dashboard/registration" className="h-[100%]">
              <img src="/Vector 390.svg" alt="img" className=" h-[100%]" />
            </Link>

            <img src="/Vector 391.svg" alt="img" className=" h-[100%]" />
            
            <Link to="/dashboard/team" className="h-[100%]">
              <img src="/Vector 402.svg" alt="img" className=" h-[100%]" />
            </Link>
        </div>
      </div>
    </div>
  );
};
export default EditDashboard;