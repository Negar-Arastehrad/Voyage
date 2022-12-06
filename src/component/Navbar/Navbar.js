import React from "react";
import "./NavbarStyle.css";
import { useState } from "react";
import {Link} from 'react-router-dom'; 

const Navbar = () => {

    const [nav,setNav] = useState(false);
    const handleNav = () => setNav(!nav);


  return (
    <div className="navbar">
      <div className="container">
        <h1 className="logo"><a href="#hero">VOYAGE</a></h1>

        <ul className={nav ? 'nav-links active' : 'nav-links'}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#explore">Explore</a></li>
          <li><a href="#tours">Tours</a></li>
        </ul>

        <div className="hamburger" onClick={handleNav}>
          <i className={nav ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
