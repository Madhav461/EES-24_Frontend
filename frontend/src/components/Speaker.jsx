import React from 'react'
import "./Speaker.css"
import { useState } from 'react';

function Speaker() {
  const [linkedin,uselinkedin]=useState('/linkedin2.svg')
  const shaktiman=()=>{
    uselinkedin('/linkedin3.svg');
  }
  const pantman=()=>{
    uselinkedin('/linkedin2.svg');
  }
  const [linkedin2,uselinkedin2]=useState('/linkedin2.svg')
  const [linkedin3,uselinkedin3]=useState('/linkedin2.svg')
  const [linkedin4,uselinkedin4]=useState('/linkedin2.svg')
  return (
    <>
    <div className="speaker">
        SPEAKERS
    </div>
    <div className="border1">
        <img
        className="border"
        alt=""
        src="/line.svg"
      />
    </div>
    <div className="con1">
    <div style={{"position":"relative"}}>
    <img className="surendradesk" alt="" src="/surendra.svg" />  
    <img className="surendramob" alt="" src="/surendra.svg" />
    <img className="Linkedin2" alt="" src={linkedin4} onMouseOver={()=>uselinkedin4('/linkedin3.svg')} onMouseLeave={()=>uselinkedin4('/linkedin2.svg')} onClick={()=>{window.open('https://linkedin.com/in/vikash-mishra-67a71911/','_blank')}}></img> 
    </div>
    </div>
    <div className="con2">
    <div style={{"position":"relative"}}>
    <img className="mathangidesk" alt="" src="/mathangi.svg" /> 
    <img className="mathangimob" alt="" src="/mathangi.svg" /> 
    <img className="Linkedin2" alt="" src={linkedin2} onMouseOver={()=>uselinkedin2('/linkedin3.svg')} onMouseLeave={()=>uselinkedin2('/linkedin2.svg')} onClick={()=>{window.open('https://www.linkedin.com/in/mathangisri/?originalSubdomain=in%20','_blank')}}></img> 
    </div>
    </div>
    <div className="con3">
    <div style={{"position":"relative"}}>
    <img className="subhdesk" alt="" src="/subh.svg" /> 
    <img className="subhmob" alt="" src="/subh.svg" /> 
    <a href="https://www.linkedin.com/in/surendranathreddy/" target="_blank" rel="noopener noreferrer"><img className="Linkedin2" alt="" src={linkedin3} onMouseOver={()=>uselinkedin3('/linkedin3.svg')} onMouseLeave={()=>uselinkedin3('/linkedin2.svg')}></img></a>
    </div>
    </div>
    <div className="con4">
    <div style={{"position":"relative"}}>
    <img className="ronitdesk" alt="" src="/ronit.svg" />   
    <img className="ronitmob" alt="" src="/ronit.svg" />
    <img className="Linkedin2" alt="" src={linkedin} onMouseOver={shaktiman} onMouseLeave={pantman} onClick={()=>{window.open('https://www.linkedin.com/in/raj-ronit/?originalSubdomain=ie','_blank')}}></img> 
    </div> 
    </div>
    </>
  )
}

export default Speaker;
