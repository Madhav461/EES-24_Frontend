import React from "react";
import Navhome from "./navhome";
import "./dashboard.css";
const dashboard=()=>{
return(
<div className="relative">
        
    {/* desktop view */}
    <div className="desktopview relative">

        {/* <div className="absolute "><Navhome /></div> */}
        
       <div className="bgimg h-[100vh] overflow-hidden dashboard-custom-background">
        <img className="object-cover" src="/image 50.svg" style={{mixBlendMode: 'difference',filter: 'blur(3.0px)'}}/>
       </div>

       <div className="card absolute " style={{ left:'50%', transform:'translateX(-50%)', background: 'rgba(255, 255, 255, 0.05)', border: '1px white solid', backdropFilter: 'blur(20.50px)'}}>
       </div>

       <div className="title_container absolute flex " style={{flexDirection:'row' ,alignItems:'end', justifyContent:'space-between', left:'50%', transform:'translateX(-50%)' }}>
            <div className=" h-[100%]">
                <img src="/Vector 347.svg" alt="img" className="h-[100%]"/>
            </div>
            <div style={{ height: '100%', textAlign: 'center', color: 'white', fontSize:'150%', fontFamily: 'Michroma', fontWeight: '400', letterSpacing: 3.0, wordWrap: 'break-word',display:'flex' ,alignItems:'end', justifyContent:'center',height:"min-content"}}>
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

{/* Mobile view */}
<div className=" mobileview relative flex flex-col  overflow-hidden" style={{height:'100vh'}}> 

{/* background image */}
    <div className="bgimage absolute overflow-hidden dashboard-custom-background">
    <img className="" src="/Android Large - 5.svg" style={{mixBlendMode: 'difference',filter: 'blur(3.0px)'}}/>
    </div>
    {/* clipPath:'polygon(27%,36% 97.5%,36% 97.5%,94% 27%,94%)' , transform:'scale(0.15)',transform:'translateX(-50%)' , */}

    <div className="side_svgs leftsvgs absolute left-[4%] top-[7%] flex flex-col w-[3%] ">
    <img src="/Vector 384.svg" alt="img" className=" w-[100%]"/>
    <img src="/Vector 387.svg" alt="img" className=" w-[100%]"/>
    <img src="/Vector 388.svg" alt="img" className=" w-[100%]"/>
    <img src="/Vector 386.svg" alt="img" className=" w-[100%]"/>
    </div>
    <div className="side_svgs rightsvgs absolute right-[4%] top-[7%] flex flex-col w-[3%] ">
    <img src="/Vector 378.svg" alt="img" className=" w-[100%]"/>
    <img src="/Vector 382.svg" alt="img" className=" w-[100%]"/>
    <img src="/Vector 383.svg" alt="img" className=" w-[100%]"/>
    <img src="/Vector 381.svg" alt="img" className=" w-[100%]"/>
    </div>

    <div className="center_group absolute top-[30vw] w-[70vw]  flex" style={{height:'10vw',flexDirection:'row' ,alignItems:'center', justifyContent:'center', left:'50%', transform:'translateX(-50%)',zIndex:'10',}}>

    <div className="profile relative" style={{ textAlign: 'center', color: 'white', fontSize: '3.5vw', fontFamily: 'Michroma', fontWeight: '400', letterSpacing: '1.5vw', wordWrap: 'break-word'}}>
        <img src="/Group 335.svg" alt="img" className="absolute left-[-65%]  h-[300%]" style={{top:'50%', transform:'translateY(-50%)'}}/>
        <img src="/Group 334.svg" alt="img" className="absolute right-[-65%] h-[300%]" style={{top:'50%', transform:'translateY(-50%)'}}/>
        PROFILE
    </div>
    
    </div> 

    <div className="main_card relative" style={{height:'60vh',display:'flex',justifyContent:'center',alignItems:'center',top:'50%', transform:'translateY(-50%)'}}>
        {/* <div style={{width: '80vw', height: '100%', background: 'rgba(255, 255, 255, 0.08)', borderRadius: 30, border: '5px white solid', backdropFilter: 'blur(43.50px)',}}> 
        </div>*/}
        <div className=" h-[100%] overflow-hidden dashboard-custom-background">
    <img className="card_image absolute w-[90%]" src="/Vector 401.svg" style={{mixBlendMode: 'difference',filter: 'blur(3.0px)',left:'50%', transform:'translateX(-50%)'}}/>
    </div>
    </div>

{/* my general doubt : transform in X&Y direc , same div mein kaam kyu nhi kr rhe like placing that content of 76 into 72 ,anyways let it go*/}

    <div className="buttons absolute flex flex-row justify-between w-[90vw] bottom-[10%] h-[12.5vw]" style={{left:'50%',transform:'translateX(-50%)'}}>
        <div className="h-[100%]">
        <img src="/Vector 390.svg" alt="img" className=" h-[100%]"/>
        <img src="/Vector 416.svg" alt="img" className=" h-[40%] absolute left-[5px] top-[25%] "/>
        </div>
        <img src="/Vector 391.svg" alt="img" className=" h-[100%]"/>
        <div className="h-[100%]">
        <img src="/Vector 402.svg" alt="img" className=" h-[100%]"/>
        <img src="/Vector 417.svg" alt="img" className=" h-[40%] absolute right-[5px] top-[25%]"/>
        </div>
    </div>
    
</div>
</div>
);
};
export default dashboard;



// desktop view other elemnts-svgs.
// <div style={{width: '100%', height: '100%', position: 'relative', transform: 'rotate(45deg)', transformOrigin: '0 0'}}>
//     <div style={{width: 12.17, height: 12.72, left: 0, top: 0, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0', boxShadow: '4px 4px 4px ', borderLeft: '1px white solid', borderBottom: '1px white solid', filter: 'blur(4px)'}} />
//     <div style={{width: 12.17, height: 12.72, left: 0, top: 0, position: 'absolute', transform: 'rotate(45deg)', transformOrigin: '0 0', borderLeft: '1px white solid', borderBottom: '1px white solid'}} />
// </div>

// <div style={{width: '100%', height: '100%', position: 'relative', transform: 'rotate(-135deg)', transformOrigin: '0 0'}}>
//     <div style={{width: 12.85, height: 13.43, left: 0, top: 0, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', boxShadow: '4px 4px 4px ', borderLeft: '1px white solid', borderBottom: '1px white solid', filter: 'blur(4px)'}} />
//     <div style={{width: 12.85, height: 13.43, left: 0, top: 0, position: 'absolute', transform: 'rotate(-135deg)', transformOrigin: '0 0', borderLeft: '1px white solid', borderBottom: '1px white solid'}} />
// </div>
