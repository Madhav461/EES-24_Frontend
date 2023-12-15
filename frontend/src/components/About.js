import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div class="center">
      <div className="div">
        <div class="upper">
          <div className="h">About Us</div>
          <div class='svg'>
            <img src="\Frame (1).svg" class='img'></img>
          </div>
        </div>
        <p className="content">
          <span className="text-wrapper">
            vitae sapien pellentesque habitant morbi tristique senectus et netus
            et malesuada fames ac turpis egestas sed tempus urna et pharetra
            pharetra massa massa ultricies mi quis hendrerit dolor magna eget
            est lorem ipsum dolor sit amet consectetur adipiscing elit
            pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas integer eget aliquet nibh praesent
            tristique.
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
