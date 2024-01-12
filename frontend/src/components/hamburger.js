import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import bg_user_reg from ".../"

const COLORS = {
  primaryDark: "black",
  primaryLight: "white",
};

const MenuLabel = styled.label`
//   background-color: ${COLORS.primaryLight};
//   position: ;
//   top: -1rem;
//   right:100vw;
  left:-1rem;
//   border-radius: 50%;
  height: 7rem;
  width: 7rem;
  cursor: pointer;
  z-index: 100;
//   box-shadow: 0 1rem 3rem ;
  text-align: center;
`;

const NavBackground = styled.div`
  position: absolute;
  top: 6.5rem;
  right: 6.5rem;
   background-image:
     ${COLORS.primaryDark}
   ;
  background-color:black;
  height: 100vh;
  width:100vh;
  border-radius: 50%;
  z-index: 60;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "black" : "white")};

  width: 3rem;
  height: 2px;
  display: inline-block;
  margin-top: 3.5rem;
  transition: all 0.3s;
  z-index:100;

  &::before,
  &::after {
    content: "";
    background-color: white;
   
    width: 3rem;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  background-color: ${COLORS.primaryDark};
  top: 0;
  right: 0;
  z-index: 60;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  justify-content:left;
  font-size: 3rem;
  font-weight: 300;
  text-decoration: none;
  color: ${COLORS.primaryLight};
  padding: 1rem 2rem;

  background-image: linear-gradient(
    120deg,
    transparent 0%,
    transparent 50%,
    #fff 50%
  );
  background-size: 240%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;

    color: ${COLORS.primaryDark};
    transform: translateX(1rem);
  }
`;

function HamburgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div id="ham_txt" className="z-10 ">
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      {/* <img src="bg_user_reg.svg"></img> */}
      <NavBackground className="h-auto  overflow-hidden" clicked={click}>&nbsp;</NavBackground>

      <Navigation className="h-auto  overflow-hidden" clicked={click}>
        <List  className="font-goldman glow-text" >
          <li class="list_point">
            <ItemLink onClick={handleClick} to="/">
              Workshops
            </ItemLink>
          </li>
          <li class="list_point">
            <ItemLink onClick={handleClick} to="/about">
              Schedule
            </ItemLink>
          </li>
          <li class="list_point">
            <ItemLink onClick={handleClick} to="/portfolio">
              Gallery
            </ItemLink>
          </li>
          <li class="list_point">
            <ItemLink onClick={handleClick} to="/blog">
              Sponsers
            </ItemLink>
          </li>
         
        </List>
      </Navigation>
    </div>
  );
}

export default HamburgerMenu;