import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const refTimeout = useRef(null);

  useEffect(() => {
    if (isRunning) {
      refTimeout.current = setTimeout(() => {
        setTotalSeconds(prev => prev + 1);
      }, 100);
    }
    return () => clearTimeout(refTimeout.current);
  }, [isRunning, totalSeconds]);

  function handleReset() {
    clearTimeout(refTimeout.current);
    setIsRunning(false);
    setTotalSeconds(0);
  }

  // Derive hours, minutes, and seconds from totalSeconds
  const hours = Math.floor(totalSeconds / 3600);
  const min = Math.floor((totalSeconds % 3600) / 60);
  const sec = totalSeconds % 60;

  return (
    <>
      <div>
        <h1>Timer</h1>
        <div>
          <span className="time">Hours: {hours} </span>
          <span className="time">Min: {min} </span>
          <span className="time">Sec: {sec} </span>
        </div>

        <div className="btn">
          <button onClick={() => setIsRunning(true)}>start⬆️</button>
          <button onClick={() => setIsRunning(false)}>pause</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    </>
  );
}

export default App;








// import { useEffect, useRef, useState } from "react";
// import "./App.css";

// function App() {
//   const [hours, setHours] = useState(0);
//   const [min, setMin] = useState(0);
//   const [sec, setSec] = useState(0);
//   const [isRunning, setIsRunning] = useState(false);
//   let refInterval = useRef(null);

//   // useEffect(() => {
//   //   if(isRunning){
//   //     refInterval.current = setTimeout(() => {
//   //     setSec(sec + 1);
//   //   }, 100);
//   //   }
//   //   if(sec>59){
//   //     setSec(0)
//   //     setMin(min+1)
//   //   }
//   //   if(min>59){
//   //     setMin(0)
//   //     setHours(hours+1)
//   //   }

//   // }, [isRunning,sec,min,hours]);

 
//   function handleReset() {
//     clearTimeout(refInterval.current);
//     setSec(0);
//     setMin(0);
//     setHours(0);
//     setIsRunning(false);
//   }

//   return (
//     <>
//       <div>
//         <h1>Timer</h1>
//         <div>
//           <span className="time">Hours: {hours} </span>
//           <span className="time">Min: {min} </span>
//           <span className="time">Sec: {sec} </span>
//         </div>

//         <div className="btn">
//           <button onClick={() => setIsRunning(true)}>start</button>
//           <button onClick={() => setIsRunning(false)}>pause</button>
//           <button onClick={handleReset}>reset</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
