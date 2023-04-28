import React from "react";
import "./Loader.css";
import { projectFirestore } from "../firebase/config";

function Loader() {
  return (
    <div className="app">
      <div className="loader">
        <div className="box-1"></div>
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default Loader;