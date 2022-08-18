import React, { useState } from "react";

const Timer = () => {
  const [counter, setcounter] = useState(0);
  let interval;
  let i = 0;
  const startTimer = () => {
    interval= setInterval(() => {
      setcounter(i);
      i++;
    }, 1000);
  };

  const stopTimer = () => {
    return stopTimer(interval);
  };
  const resetTimer = () => {
    return setcounter(0);
    // stopTimer(interval);
  
  };
  return (
    <>
      <h1 style={{ color: "grey" }}>
        TIMER: <span style={{ color: "blue" }}>{counter}</span>
      </h1>
      <div className="row">
        <div className="col">
          <button
            className="btn-primary"
            onClick={() => startTimer()}
            style={{ color: "green" }}
          >
            start timer
          </button>
        </div>
        <div className="col">
           <button
            className="btn-primary"
            onClick={() => stopTimer()}
            style={{ color: "red" }}
          >
            stop timer
          </button>
        </div>
        <div className="col">
          <button
            className="btn-primary"
            onClick={() => resetTimer()}
            style={{ color: "violet" }}
          >
            reset timer
          </button>
        </div>
      </div>
    </>
  );
};
export default Timer;