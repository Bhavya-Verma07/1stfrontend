import React from "react";
// import Centerc from "./centerc";
const center = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://picsum.photos/200"
          className="card-img-top"
          alt="test"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      {/* <Centerc/> */}
    </>
  );
};

export default center;
