import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    const NavlinkStyles = {
        display: "block",
        width: "200px",
        padding: "12px",
        margin: "0 12px 12px",
        background: "",
        textDecoration: "none",
        color: "Blue",
        
      };

  return (
    <div className="navbar">
    <NavLink to="/" style={NavlinkStyles} >
         Home
     </NavLink> 
     <NavLink to="/movies" style={NavlinkStyles}>
         Movies
     </NavLink> 
     <NavLink to="/directors" style={NavlinkStyles}>
         Directors
     </NavLink> 
     <NavLink to="/actors" style={NavlinkStyles}>
         Actors
     </NavLink> 
    </div>
   );
}

export default NavBar;
