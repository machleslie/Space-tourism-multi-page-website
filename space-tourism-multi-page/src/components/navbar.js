import "./navbar.css"
const Navbar = () => {
    return (  <div className="mainnav">
        <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </div>
        <div className="line"></div>
        <div className="navlinks">
            <a href="/"><b>00</b>  HOME</a>
            <a href="/destination"> <b>01</b>  DESTINATION</a>
            <a href="/crew"><b>02</b>  CREW</a>
            <a href="/technology"><b>03</b>  TECHNOLOGY</a>
        </div>
    </div> );
}
 
export default Navbar;