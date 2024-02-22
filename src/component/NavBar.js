import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
   return (
      <>
         <center>
            <div className="nav">
               <Link to="/" >Home</Link>
               <Link to="/alarm" >Alarm</Link>
               <Link to="/countdowntimer" >CountdownTimer</Link>
               <Link to="/stopwatch" >Stopwatch</Link>
               <Link to="/worldclock" >WorldClock</Link>
               <Link to="/*" ></Link>
            </div>
         </center>
      </>
   );
}