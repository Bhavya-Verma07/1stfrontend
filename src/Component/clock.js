import React, { useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [day, setday] = useState(new Date().toLocaleDateString());

  const updatetime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  setInterval(() => {
    updatetime();
  }, 1000);

  return (
      <div>
        <h1>
          Current time is <span style={{ color: "green" }}>{time}</span>
        </h1>
        <h1>
          Current date is <span style={{ color:"saddlebrown" }}>{day}</span>
        </h1>
      </div>
  );
};

export default Clock;