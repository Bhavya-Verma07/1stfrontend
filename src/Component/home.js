import React from "react";

const home = () => {
  console.log("hello from the above of return, it's js.");
  let name;
  let profileviews;
  let impressions;
  let position;
  name = "Harry";
  position="app developer"
  profileviews = 77;
  impressions = 88;

  const handleclick = () => {
    console.log("hello from handleclick inside onclick");
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
        Click here
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
        click again
      </button>
    </>
  );
};

export default home;
