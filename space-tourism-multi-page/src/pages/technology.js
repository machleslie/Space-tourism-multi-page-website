import Navbar from "../components/navbar";
import "./technology.css";
import React, { useState } from "react";
import data from "../data.json"
import launch from "./assets/technology/image-launch-vehicle-portrait.jpg";
// import launchl from "./assets/technology/image-launch-vehicle-landscape.jpg";
import spaceport from "./assets/technology/image-spaceport-portrait.jpg";
import spaceportl from "./assets/technology/image-spaceport-landscape.jpg";
import capsule from "./assets/technology/image-space-capsule-portrait.jpg";
// import capsulel from "./assets/technology/image-space-capsule-landscape.jpg";
const Technology = () => {
    const [postion,setPosition]=useState(0)
    console.log(data.technology)
  function showpicture(){
      if(postion==0){
          return launch
      }
      if(postion==1){
          return capsule
      }
      if(postion==2){
          return spaceport
      }
  }
    
    function getdetails(){
        return data.technology[postion]
    }

    return ( <div className="technologypage">
        <Navbar/>
        <div className="maincontent">
        <div className="heading">
          <h5>
            <b>01</b>SPACE LAUNCH 101
          </h5>
        </div>
        <div className="subcontent">
            .
            <div className="lables">
                <div className="numberbtn" onClick={()=>{
                    setPosition(0)
                }}>1</div>
                <div className="numberbtn" onClick={()=>{
                    setPosition(1)
                }}>2</div>
                <div className="numberbtn" onClick={()=>{
                    setPosition(2)
                }}>3</div>
            </div>
            <div className="detailsparagraph">
                <p>The Technology...</p>
                <h3>{getdetails().name}</h3>
                <p>{getdetails().description}</p>
            </div>
            <div className="image">
                <img src={showpicture()} alt="imagej" />
            </div>
        </div>
        </div>
    </div> );
}
 
export default Technology;