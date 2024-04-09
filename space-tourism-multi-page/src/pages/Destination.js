import React from "react";
import { useState,useEffect } from "react";
import Navbar from "../components/navbar";
import "./destination.css";
import Data from "../data";
import moon from "./assets/destination/image-moon.png";
import mars from "./assets/destination/image-mars.png";
import europa from "./assets/destination/image-europa.png";
import titan from "./assets/destination/image-titan.png";

const Destination = () => {
  const [position, setPosition] = useState(0);
  const[destinations, setDestinations]=useState(Data.destinations)
console.log(Data)
  useEffect(()=>{
    setDestinations(Data.destinations)

  },[destinations])

  // getting destination names
  function getnames() {
    return destinations.map((destination) => {
      return destination.name;
    });
  }
  // getting details
  function getdetails(id) {
    return destinations[id];
  }

  // getting the current image
  function getcurrentimage(){
       if (getdetails(position).name === "Moon") {
        return moon;
      }
      if (getdetails(position).name === "Mars") {
        return mars;
      }
      if (getdetails(position).name === "Europa") {
        return europa;
      }
      if (getdetails(position).name === "Titan") {
        return titan;
      }
      return null;
  
  }
const path=getcurrentimage()
console.log(path)
  
  
  

  return (
    <div className="destinationpage">
      <Navbar />
      <div className="maincontent">
        <div className="heading">
          <h5><b>01</b> PICK A DESTINATION</h5>
        </div>
        <div className="subcontent">
        <div className="image">            
         {path && <img src={path} alt={getdetails(position.name)} />}
        </div>
        <div className="destinationplanets">
       

        <div className="planetcontent">
        <div className="destinations">
          {getnames().map((name, index) => {
            
            return (
              <p className="destintion" onClick={() => setPosition(index)} key={index}>
                {name}
              </p>
            );
          })}
        </div>

          <h1>{getdetails(position).name}</h1>
          <p>{getdetails(position).description}</p>
          <div className="line"></div>
          <div className="otherdata">
          <div className="distance">
            <p className="subheading2">AVG. DISTANCE</p>
            <p className="subheading1">{getdetails(position).distance}</p>
          </div>
          <div className="travel">
            <p className="subheading2">EST. TRAVEL TIME</p>
            <p className="subheading1">{getdetails(position).travel}</p>
          </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
