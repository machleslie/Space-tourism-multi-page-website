import Navbar from "../components/navbar";
import React from "react";
import "../App.css";
import "./homepage.css";
import { Link } from "react-router-dom";
const HOME = () => {
  return (
    <div className="mainhome">
      <Navbar />
      <div className="maincontainer">
        <div className="content">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="explorebtn">
          <button>
            <Link className="explore" to={"/destination"}>EXPLORE</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HOME;
