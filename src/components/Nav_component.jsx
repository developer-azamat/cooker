import React, { useContext } from "react";
import { ThemeContext } from "./context/ChangeThemContext";

function Nav_component(props) {
  const { changeNavColor } = useContext(ThemeContext);
  return (
    <>
      <li
        className="rounded"
        onClick={() => changeNavColor(props.color)}
        style={{ backgroundColor: props.color }}
      ></li>
    </>
  );
}

export default Nav_component;
