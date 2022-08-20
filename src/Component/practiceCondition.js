import React, { useState, useEffect } from "react";
const Condition = () => {
  const [counter, setCounter] = useState("low");
  const handleincreament = () => {
    setCounter(counter + 1);
  };
  const handledecreament = () => {
    setCounter(counter - 1);
  };
  useEffect(() => {
    setCounter(0);
  }, []);

  return (
    <>
      {counter <= 5 ? (
        <>
          <h2>Low</h2>
        </>
      ) : counter > 5 && counter <= 10 ? (
        <h2>Medium</h2>
      ) : (
        <h2>High</h2>
      )}
      ;
      <h1 style={{ color: "grey", textAlign: "center" }}>
        Current Counter: <span style={{ color: "blue" }}>{counter}</span>
      </h1>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col">
          <button
            className="btn-primary my-10"
            onClick={() => handleincreament()}
            style={{
              backgroundColor: "green",
              color: "white",
              height: "60px",
              width: "200px",
            }}
          >
            Increase counter
          </button>
        </div>
        <div className="col">
          <button
            className="btn-primary my-10"
            onClick={() => handledecreament()}
            style={{
              backgroundColor: "red",
              color: "white",
              height: "60px",
              width: "200px",
            }}
          >
            Decrease counter
          </button>
        </div>
      </div>
    </>
  );
};
export default Condition;
