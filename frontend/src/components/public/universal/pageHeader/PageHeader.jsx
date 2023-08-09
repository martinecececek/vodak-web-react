import "./PageHeader.css";
import { Link } from "react-router-dom";
//import some react stuff
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const TopNav = () => {
   const navRef = useRef();

   const showNavbar = () => {
      navRef.current.classList.toggle("responsive_nav");
   };

   return (
      <header>
         <h3>3.VOM</h3>
         <nav ref={navRef}>
            <Link to={"/domu"}>
               <a>Domů</a>
            </Link>
            <Link to={"/onas"}>
               <a>O nás</a>
            </Link>
            <Link to={"/program"}>
               <a>Program</a>
            </Link>
            <Link to={"/vybaveni"}>
               <a>Vybaveni</a>
            </Link>
            <Link to={"/galerie"}>
               <a>Galerie</a>
            </Link>
            <Link to={"/kontakty"}>
               <a>Kontakty</a>
            </Link>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
               <FaTimes />
            </button>
         </nav>
         <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
         </button>
      </header>
   );
};

export default TopNav;
