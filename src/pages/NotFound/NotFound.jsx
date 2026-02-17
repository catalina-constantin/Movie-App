import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="background"></div>
      <div className="container">
        <div className="inner-content">
          <h1 className="heading">404</h1>
          <p className="subheading">
            Looks like the page you were looking for is no longer here.
          </p>
          <button className="home-button" onClick={() => navigate("/")}>
            Go Back Home
          </button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
