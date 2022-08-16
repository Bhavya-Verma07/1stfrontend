import React,{useState} from "react";

const Home = () => {
  console.log("hello from the above of return, it's js.");
  // first argument represents value , second argument is used to update the value 
  // let name;
  const [name, setname]=useState("Harry");
  // let profileviews;
  const [profileviews, setviews]=useState("95");
  // let impressions;
  const [impressions, setimpression]=useState("101");
  // let position;
  const [position, setposition]=useState("MERN Developer");
  // name = "Harry";
  // position="app developer"
  // profileviews = 77;
  // impressions = 88;

  const handleclick = () => {
   setname("Jenny");
   setviews("100");
   setimpression("150");
   setposition("Full stack Web Developer");
  };
  return (
    <>
      <h1 style={{ backgroundColor: "pink" }}>Joe</h1>
      <p>full stack developer</p>
      <p>number of views on your profile: 65</p>
      <p>impressions on your profie: 75</p>
      <button
        onClick={() => {
          console.log("hello from the jsx i.e. inside the return");
        }}
        className="btn btn-primary my-3"
      >
        click here
      </button>
      {/* for variable set of values to be entered */}
      <br /><hr/>
      <h1 style={{ backgroundColor: "green" }}>{name}</h1>
      <p>{position}</p>
      <p>number of views on your profile:{profileviews}</p>
      <p>impressions on your profie:{impressions}</p>
      <button
        onClick={() => {
          handleclick();
        }}
        className="btn btn-primary"
      >
        change details
      </button>
    </>
  );
};
export default Home;
