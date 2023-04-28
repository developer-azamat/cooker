import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./context/ChangeThemContext";
import { GiCook } from 'react-icons/gi'
import { MdOutlineCreateNewFolder } from 'react-icons/md'

function Navbar() {
  const { color } = useContext(ThemeContext);
  return (
    <div>
      <div className="navbar" style={{ background: color }}>
        <Link to="/" className="brand">
          COOKING <GiCook />
        </Link>
        <Link to="/form" className="btn">
          Create <MdOutlineCreateNewFolder/>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
