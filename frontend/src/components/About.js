import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div id="container">
      <div class="svg4">
        <img src="Group 12.svg"></img>
      </div>
      <div class="center">
        <div class="column1">
          <div class="svg3">
            <img src="\Vector 22.svg"></img>
          </div>
          <div class="svg2">
            <img src="\Group 7.svg" class="img2"></img>
          </div>
        </div>
        <div className="div">
          <div class="upper">
            <div className="h">About Us</div>
            <div class="svg1">
              <img src="\Frame 165.svg" class="img1"></img>
            </div>
          </div>
          <p className="content">
            <span className="text-wrapper">
              vitae sapien pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas sed tempus urna et
              pharetra pharetra massa massa ultricies mi quis hendrerit dolor
              magna eget est lorem ipsum dolor sit amet consectetur adipiscing
              elit pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas integer eget aliquet nibh
              praesent tristique.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
