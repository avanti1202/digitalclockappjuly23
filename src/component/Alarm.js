
// import { useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import "./Alarm.css";
// import alarmSound from './alarm.mp3'

// export default function Alarm() {
//    const [alarmTime, setAlarmTime] = useState('');
//    const [isAlarmSet, setIsAlarmSet] = useState(false);
//    const [isAlarmReached, setIsAlarmReached] = useState(false);

//    useEffect(() => {
//       if (isAlarmSet) {
//          const interval = setInterval(checkAlarm, 1000);
//          return () => clearInterval(interval);
//       }
//    }, [isAlarmSet]);

//    const hAlarmChange = (event) => {
//       const { value } = event.target;
//       setAlarmTime(value);
//    };

//    const setAlarm = () => {
//       if (alarmTime) {
//          console.log('Alarm time:', alarmTime);
//          setIsAlarmSet(true);
//          setIsAlarmReached(false);
//       } else {
//          console.log('Invalid time value');
//          setIsAlarmSet(false);
//       }
//    };

//    const checkAlarm = () => {
//       if (alarmTime) {
//          const currentTime = new Date();
//          const [hours, minutes] = alarmTime.split(':');
//          const alarmDate = new Date(
//             currentTime.getFullYear(),
//             currentTime.getMonth(),
//             currentTime.getDate(),
//             hours,
//             minutes
//          );

//          //if (currentTime === alarmTime)
//          if (currentTime === alarmDate && !isAlarmReached) {
//             setIsAlarmReached(true);
//             console.log("Alert Time has reached!!");
//             playAlarmSound();
//          }
//       }
//    };

//    const playAlarmSound = () => {
//       const audio = new Audio(alarmSound);
//       audio.play();
//    };

//    const hResetAlarm = () => {
//       setIsAlarmSet(false);
//       setIsAlarmReached(false);
//       setAlarmTime("");
//    };

//    const formatAlarmTime = alarmTime ? format(new Date(`2000-01-01T${alarmTime}`), 'hh:mm a') : '';


//    { document.body.style.backgroundColor = "#F0E68C" }
//    return (
//       <>
//          <center>
//             <h1> Alarm Clock</h1>
//             <div class="alarm">
//                <input type="time" className="setalarm" value={alarmTime} onChange={hAlarmChange} />
//                <br />
//                <button onClick={setAlarm}>Set Alarm</button>
//                <button class="alarm-reset" onClick={hResetAlarm}>Reset Alarm</button>
//                {isAlarmSet && (
//                   <h3 className='settime'>
//                      Alarm at : {formatAlarmTime}
//                   </h3>
//                )}
//                {isAlarmReached && (
//                   <h3 class="msg">Alarm time has been reached!</h3>

//                )}

//             </div>

//          </center>
//       </>
//    );
// }



import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import "./Alarm.css";
import alarmSound from './alarm.mp3'

export default function Alarm() {
   const [alarmTime, setAlarmTime] = useState('');
   const [isAlarmSet, setIsAlarmSet] = useState(false);
   const [isAlarmReached, setIsAlarmReached] = useState(false);

   useEffect(() => {
      if (isAlarmSet) {
         const interval = setInterval(checkAlarm, 1000);
         return () => clearInterval(interval);
      }
   }, [isAlarmSet]);

   const hAlarmChange = (event) => {
      const { value } = event.target;
      setAlarmTime(value);
   };

   const setAlarm = () => {
      if (alarmTime) {
         console.log('Alarm time:', alarmTime);
         setIsAlarmSet(true);
         setIsAlarmReached(false);
      } else {
         console.log('Invalid time value');
         setIsAlarmSet(false);
      }
   };

   const checkAlarm = () => {
      if (alarmTime) {
         const currentTime = new Date();
         const [hours, minutes] = alarmTime.split(':');
         const alarmDate = new Date(
            currentTime.getFullYear(),
            currentTime.getMonth(),
            currentTime.getDate(),
            hours,
            minutes
         );

         //if (currentTime === alarmTime)
         if (currentTime >= alarmDate && !isAlarmReached) {
            // window.alert("Alert Time has reached!!");
            setIsAlarmReached(true);
            playAlarmSound();
         }
      }
   };

   const playAlarmSound = () => {
      const audio = new Audio(alarmSound);
      audio.play();
   };

   const hResetAlarm = () => {
      setIsAlarmSet(false);
      setIsAlarmReached(false);
      setAlarmTime("");
   };

   const formatAlarmTime = alarmTime ? format(new Date(`2000-01-01T${alarmTime}`), 'hh:mm a') : '';


   { document.body.style.backgroundColor = "#F0E68C" }
   return (
      <>
         <center>
            <h1> Alarm Clock</h1>
            <div class="alarm">
               <input type="time" className="setalarm" value={alarmTime} onChange={hAlarmChange} />
               <br />
               <button onClick={setAlarm}>Set Alarm</button>
               <button class="alarm-reset" onClick={hResetAlarm}>Reset Alarm</button>
               {isAlarmSet && (
                  <h3 className='settime'>
                     Alarm at : {formatAlarmTime}
                  </h3>
               )}
               {isAlarmReached && (
                  <h3 class="msg">Alarm time has been reached!</h3>

               )}

            </div>

         </center>
      </>
   );
}
