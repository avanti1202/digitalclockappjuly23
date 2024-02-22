import React from "react";
import { useState } from "react";
import "./Home.css";

export default function Home() {

   let time = new Date().toLocaleTimeString();

   const [currenttime, setCurrentTime] = useState(time);

   const ChangingTime = () => {
      time = new Date().toLocaleTimeString();
      setCurrentTime(time);
   };

   setInterval(ChangingTime, 1000);

   { document.body.style.backgroundColor = " #8FBC8B " }
   return (
      <>
         <center >
            <form >
               <h1> Digital Clock By Avanti</h1>
               <br />
               <div class="container">
                  <span> {currenttime}</span>
               </div>
            </form >
         </center >

      </>
   );
}