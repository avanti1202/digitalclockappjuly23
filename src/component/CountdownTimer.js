import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import "./CountdownTimer.css";

export default function CountdownTimer() {
   const [hours, setHours] = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [milliseconds, setMilliseconds] = useState(0);
   const [isRunning, setIsRunning] = useState(null);

   const [showEndScreen, setShowEndScreen] = useState({
      show: false,
      message: "Countdown Ended",
   });
   useEffect(() => {
      let interval;
      if (isRunning) {
         interval = setInterval(() => {
            if (milliseconds > 0) {
               setMilliseconds((milliseconds) => milliseconds - 1);
            } else if (seconds > 0) {
               setSeconds((seconds) => seconds - 1);
               setMilliseconds(99);
            } else if (minutes > 0) {
               setMinutes((minutes) => minutes - 1);
               setSeconds(59);
               setMilliseconds(99);
            } else if (hours > 0) {
               setHours((hours) => hours - 1);
               setMinutes(59);
               setSeconds(59);
               setMilliseconds(99);
            }
         }, 10);
      }


      if (hours === 0 && minutes === 0 && seconds === 0 && milliseconds === 1) {
         setShowEndScreen({ ...showEndScreen, show: true });
         resetTimer();
      }
      return () => clearInterval(interval);
   }, [milliseconds, seconds, minutes, hours, isRunning, showEndScreen.show]);

   function startTimer() {
      if (hours !== 0 || minutes !== 0 || seconds !== 0 || milliseconds !== 0) {
         setIsRunning(true);
         setShowEndScreen({ ...showEndScreen, show: false });
      }
      else {
         window.alert("Please enter Time to start Timer.");
      }
      if ((hours === "") || (minutes === "") || (seconds === "") || (milliseconds === "")) {
         alert("Input is empty");
         resetTimer();
      }

      if ((hours < 0) || (hours > 24) || (minutes > 59) || (minutes < 0) || (seconds > 59) || (seconds < 0)) {
         window.alert("Time cannot be negative or more than given limits");
         resetTimer();
      }

     
      if ((hours.toString().trim() == "") || (minutes.toString().trim() == "") || (seconds.toString().trim() == "")) {
         // || (milliseceonds.toString().trim() == "")
         window.alert("No white spaces allowed!");
         resetTimer();
      }

      // if ((hours != [/^0-9+$/]) || (minutes == (/^[A-Za-z ]+$/)) || (seconds != [/^0-9+$/]) || (milliseconds != [/^0-9+$/])) {
      //    window.alert("No special characters and alphabets are allowed!!");
      //    resetTimer();
      // }
   }

   function pauseTimer() {
      setIsRunning(false);
   }

   function stopTimer() {
      resetTimer();
      setShowEndScreen({ ...showEndScreen, show: false });
   }

   function resetTimer() {
      setIsRunning(false);
      setMilliseconds(0);
      setSeconds(0);
      setMinutes(0);
      setHours(0);
   }

   const changeSeconds = (e) => {
      setSeconds(e.target.value);
   };
   const changeMinutes = (e) => {
      setMinutes(e.target.value);
   };
   const changeHours = (e) => {
      setHours(e.target.value);
   };

   document.body.style.background = "#DDA0DD";

   return (
      <>
         <center>
            <h1>Countdown Timer</h1>
            {showEndScreen.show && (
               <h1 className="title  text-light">{showEndScreen.message}</h1>
            )}
            <Timer
               milliseconds={milliseconds}
               seconds={seconds}
               minutes={minutes}
               hours={hours}
               changeSeconds={changeSeconds}
               changeMinutes={changeMinutes}
               changeHours={changeHours}
            />
            <br />

            <div class="btn">

               {!isRunning && (
                  <button className="btn-start" onClick={startTimer}>
                     Start
                  </button>
               )}
               {isRunning && (
                  <button className="btn-pause" onClick={pauseTimer}>
                     Pause
                  </button>
               )}{" "}
               <button className="btn-reset" onClick={stopTimer}>
                  Reset
               </button>
            </div>

         </center >
      </>
   );
}

