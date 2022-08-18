import React, { useState } from "react";
const Tool = () => {
  const [counter, setcounter] = useState(0);
  const [step, setStep] = useState(0);
  const stepincreament = () => {
    if(step===9)
    {
        alert("Congratulations, you have achieved the target.");
    }
    if(step===10)
    {
       return alert("Target already achieved.")
    }
    setStep(step + 1);
  };
  const stepdecreament = () => {
    setStep(step - 1);
  };

  const handleincreament = () => {
    setcounter(counter + 1);
  };
  const handledecreament = () => {
    setcounter(counter - 1);
  };
  return (
    <>
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
      <h1 style={{ color: "grey", textAlign: "left" }}>
        Target:<span style={{ color: "blue" }}>10</span>
      </h1>
      <h1 style={{ color: "grey", textAlign: "left" }}>
        Current Steps: <span style={{ color: "blue" }}>{step}</span>
      </h1>
      <h1 style={{ color: "grey", textAlign: "left" }}>
     Steps Left: <span style={{ color: "blue" }}>{10-step}</span>
      </h1>
      <div className="row" style={{ textAlign: "center" }}>
        <div className="col">
          <button
            className="btn-primary my-10"
            onClick={() => stepincreament()}
            style={{
              backgroundColor: "green",
              color: "white",
              height: "60px",
              width: "200px",
            }}
          >
            Increase steps
          </button>
        </div>
        <div className="col">
          <button
            className="btn-primary my-10"
            onClick={() => stepdecreament()}
            style={{
              backgroundColor: "red",
              color: "white",
              height: "60px",
              width: "200px",
            }}
          >
            Decrease steps
          </button>
        </div>
      </div>
    </>
  );
};
export default Tool;
