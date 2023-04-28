import React, { useContext } from "react";
import { MdNightlightRound, MdNightsStay } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";
import Nav_component from "./Nav_component";
import { ThemeContext } from "./context/ChangeThemContext";

function Nav() {
  const { mode, changeMode } = useContext(ThemeContext);
  return (
    <div className="nav__bottom">
      {mode ? (
        <MdNightlightRound className="Icon_nav" onClick={changeMode} />
      ) : (
        <BsFillSunFill className="Icon_nav" onClick={changeMode} />
      )}
      <div className="flex-el">
        <Nav_component color="#00FFAB" />
        <Nav_component color="blue" />
        <Nav_component color="#ff7b00" />
        <Nav_component color="yellow" />
        <Nav_component color="#682CA3" />
        <Nav_component color="#5DA9B2" />
      </div>
    </div>
  );
}

export default Nav;
