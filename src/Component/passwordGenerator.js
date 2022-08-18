import React, { useState } from "react";

const Pass = () => {

    const [password, setPassword]=useState("1~10@889$");
    const generatepass=()=>{
    let x = Math.random()*10000000; //math.random is used to generate random numbers in javascript
    setPassword(Math.floor(x)); 
    };//math.floor returns the largest integeer less than or equal to a given number
  return (
    <>
      <div>
        <p>
          Use the Strong Password Generator to create highly secure passwords
          that are difficult to crack or guess.
        </p>
        <h1>
          {" "}
          Your generated password is {""}
          <span style={{ color:"olive" }}>{password}</span>
        </h1>
        <button
          className="btn-primary"
          style={{ backgroundColor:"peachpuff", height:"50px",width:"200px", alignItems:"center" }}
          onClick={() => {
            generatepass();
          }}
        >
          Generate
        </button>
      </div>
    </>
  );
};
export default Pass;
