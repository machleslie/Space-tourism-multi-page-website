import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mainnav">
      <div className="logo">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fillRule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </Link>
      </div>
      <div className="line"></div>
      <div className="navlinks">
        <Link to="/">
          <b>00</b> HOME
        </Link>
        <Link to="/destination">
          {" "}
          <b>01</b> DESTINATION
        </Link>
        <Link to="/crew">
          <b>02</b> CREW
        </Link>
        <Link to="/technology">
          <b>03</b> TECHNOLOGY
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
