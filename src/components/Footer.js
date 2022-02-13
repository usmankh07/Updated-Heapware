import React from "react";
import { Link } from "react-router-dom";
import logo1 from "../images/logo.png";

function Footer() {
  return (
    <>
      <div className="last-container">
       <div className="footer-content">
         <div className="logo1">
           <img src={logo1} alt="" />
         </div>
         <div className="paragraph">
           <p>Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit</p>
         </div>
         <div className="footerpoints-1">
           <ul>
             <li><h5>Company</h5></li>
             <Link to='/aboutus'><li>About Us</li></Link>
             <Link to='/contact'><li>Contact Us</li></Link>
             <Link to='/team'><li>Team</li></Link>

             <li>Blog</li>
           </ul>
         </div>
         <div className="footerpoints-2">
           <ul>
             <li><h5>Learn</h5></li>
             <li>Courses</li>
             <li>Early Access Courses</li>
             <li>Pricing</li>
           </ul>
         </div>
         <div className="footerpoints-3">
           <ul>
             <li><h5>Legal</h5></li>
             <li>Terms & Conditions</li>
             <li>Privacy Policy</li>
             <li>Business Terms of Service</li>
           </ul>
         </div>
       </div>
      </div>
           <footer>Heapware Online &copy; 2022 | All Rights Reserved</footer>
    </>
  );
}

export default Footer;
