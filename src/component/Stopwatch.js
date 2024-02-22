import React, { useState, useEffect } from "react";
import "./Stopwatch.css";

export default function Stopwatch() {
   const [time, setTime] = useState(0);
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      let interval;
      if (isActive) {
         interval = setInterval(() => setTime(time + 1), 10);
      }
      return () => clearInterval(interval);
   }, [isActive, time]);

   const hours = Math.floor(time / 360000);
   const minutes = Math.floor((time % 360000) / 6000);
   const seconds = Math.floor((time % 6000) / 100);
   const milliseconds = time % 100;


   const startAndPause = () => {
      setIsActive(!isActive);
   };

   const reset = () => {
      setTime(0);
   };
   { document.body.style.backgroundColor = "pink" }
   return (
      < >
         <center >
            <h1> Stopwatch</h1>
            <div className="stopwatch-container">
               <p className="stopwatch-time">
                  {hours}:{minutes.toString().padStart(2, "0")}:
                  {seconds.toString().padStart(2, "0")}:
                  {milliseconds.toString().padStart(2, "0")}
               </p>
            </div>
            <div className="stopwatch-buttons">
               <button className="stopwatch-start-stop" onClick={startAndPause}>
                  {!isActive ? "START" : "STOP"}
               </button>

               <button className="stopwatch-reset" onClick={reset}>
                  RESET
               </button>
            </div>
         </center >
      </>
   );
};
