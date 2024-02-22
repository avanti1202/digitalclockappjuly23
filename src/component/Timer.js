import React from "react";
import styled from "styled-components";

const TimerWrapper = styled.div`
  margin-top: 10vh;
  height:30vh;
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: #720e9e;
  color: #eee;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  padding: 1rem 0;

  label {
    margin-bottom: 0.5rem;
  }
  input {
    width: 100px;
    margin-right: 1rem;
    color: green;
    outline: none;
    border: none;
    font-size: 4.5rem;
    font-weight: 500;
    text-align: center;
    padding: 0px 0.5rem;
    border-radius: 5px;
  }
  input:hover {
    background-color: #FFFFE0;
  }
`;

export default function Timer({
   milliseconds,
   seconds,
   minutes,
   hours,
   changeSeconds,
   changeMinutes,
   changeHours,
}) {
   return (
      <>
         <center>

            <TimerWrapper>
               <div className="d-flex flex-column">
                  <label>HH</label>
                  <input type="number" value={hours} onChange={changeHours} />
               </div>{" "}
               <div className="d-flex flex-column">
                  <label>MM</label>
                  <input type="number" value={minutes} onChange={changeMinutes} />
               </div>{" "}
               <div className="d-flex flex-column">
                  <label>SS</label>
                  <input type="number" value={seconds} onChange={changeSeconds} />
               </div>{" "}
               <div className="d-flex flex-column">
                  <label>MS</label>
                  <input value={milliseconds} />
               </div>
            </TimerWrapper>

         </center>
      </>
   );
}