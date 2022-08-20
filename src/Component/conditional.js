import React, { useState, useEffect } from "react";
const Conditional = () => {
  const [isComplete, setisComplete] = useState(false);
  useEffect(() => {
    setisComplete(true);
  }, []);
  return (
    <div>
      {isComplete === true ? (
        <>
          <h1>MERN Stack developer</h1>
          <p>location:Ballia</p>
        </>
      ) : (
        <>
          <h1>Your profile is incomplete</h1>
          <p>complete your profile</p>
        </>
      )}
      <button onClick={() => setisComplete(!isComplete)}>edit profile</button>
    </div>
  );
};
export default Conditional;

//ASSIGNMENT
//use state me bydefult low likhenge
//print krana h low, medium ,high
//do this using ternary operator
