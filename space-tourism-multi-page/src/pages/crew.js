import "./crew.css";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import Data from "../data.json";
import Douglas from "./assets/crew/image-douglas-hurley.png";
import Mark from "./assets/crew/image-mark-shuttleworth.png";
import Victor from "./assets/crew/image-victor-glover.png";
import Anousheh from "./assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  const [crew, setCrew] = useState(Data.crew);
  const [position, setPosition] = useState(0);
  const[active,setActive]=useState(0)
  // console.log(crew[position]);

  // console.log(crew);
  useEffect(() => {
    setCrew(Data.crew);
  }, [crew]);

  // useEffect(() => {
  //   setposition(position)
  // },[position])

  function getdetails() {
    return crew[position];
  }
  // console.log(Douglas);

  function getcurrentimage() {
    if (crew[position].name === "Douglas Hurley") {
      return Douglas;
    }
    if (crew[position].name === "Mark Shuttleworth") {
      return Mark;
    }
    if (crew[position].name === "Victor Glover") {
      return Victor;
    }
    if (crew[position].name === "Anousheh Ansari") {
      return Anousheh;
    }
  }

  return (
    <div className="destinationpage">
      <Navbar />
      <div className="maincontent">
        <div className="heading">
          <h5>
            <b>01</b>MEET YOUR CREW
          </h5>
        </div>
        <div className="subcontent">
          <div className="crewdetails">
            <h4 className="role">{getdetails().role}</h4>
            <div className="details"><h3>{getdetails().name}</h3>
            <p className="detailsparagraph">{getdetails().bio}</p></div>
            <div className="btns">
              <div
                className={active===0?"btn activem":"btn"}
                onClick={() => {
                  setPosition(0);
                  setActive(0)
                }}
              ></div>
              <div
                className={active===1?"btn activem":"btn"}
                onClick={() => {
                  setPosition(1);
                  setActive(1)
                }}
              ></div>
              <div
                className={active===2?"btn activem":"btn"}
                onClick={() => {
                  setPosition(2);
                  setActive(2)
                }}
              ></div>
              <div
                className={active===3?"btn activem":"btn"}
                onClick={() => {
                  setPosition(3);
                  setActive(3)
                }}
              ></div>
            </div>
          </div>

          <div className="image">
            <img src={getcurrentimage()} alt={getdetails()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
