import React from "react";
const Practice=({title, settitle,alerts})=>{
   

    return(
        <>
        <div>
            <h1>this is {title}</h1>
            <button onClick={()=> settitle("harry")}>change name</button>
            <button btn btn-success onClick={()=> alerts()}>clickhere</button>
            <p>
            <button btn btn-success onClick={()=> knowMore()}>click here</button> here to know more.
            </p>
            </div>
            </>
    );
};
export default Practice;