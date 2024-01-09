import React from "react";
import Navhome from "./navhome";
const dashboard=()=>{
    return(
        <div className="relative">

        {/* <div className="absolute top-[0] "><Navhome /></div> */}
        
       <div className="h-[100vh] overflow-hidden">
        <img className=" width-[100vw] mt-[-1330px] object-cover" src="/image 50.svg" style={{mixBlendMode: 'difference',filter: 'blur(3.0px)'}}/>
       </div>

       <div className="absolute w-[83.3%] h-[46%] top-[39%] " style={{ left:'50%', transform:'translateX(-50%)', background: 'rgba(255, 255, 255, 0.05)', border: '1px white solid', backdropFilter: 'blur(20.50px)'}}>
       </div>

        {/* 18)h-[17%] */}

       <div className="absolute top-[13.5%] w-[78%] h-[17%]  flex " style={{flexDirection:'row' ,alignItems:'end', justifyContent:'space-between', left:'50%', transform:'translateX(-50%)' }}>
            <div className=" h-[100%]">
                <img src="/Vector 347.svg" alt="img" className="h-[100%]"/>
            </div>
            <div style={{ height: '100%', textAlign: 'center', color: 'white', fontSize:'150%', fontFamily: 'Michroma', fontWeight: '400', letterSpacing: 2.70, wordWrap: 'break-word',display:'flex' ,alignItems:'end', justifyContent:'center'}}>
                <div className="relative">
                <img src="/Vector_347.svg" alt="img" className="absolute left-[-14%] top-[-27%] "/>
                <img src="/Vector 349.svg" alt="img" className="absolute right-[-14%] top-[-27%] "/>
                <img src="/Vector 348.svg" alt="img" className="absolute right-[-14%] bottom-[-27%] "/>
                <img src="/Vector 350.svg" alt="img" className="absolute left-[-14%] bottom-[-27%] "/>
                PROFILE
                </div>
            </div>
            <div className="h-[100%]  ">
                <img src="/Vector 346.svg" alt="img" className="h-[100%]"/>
            </div>
        </div>   

       </div> 
    );
};
export default dashboard;

