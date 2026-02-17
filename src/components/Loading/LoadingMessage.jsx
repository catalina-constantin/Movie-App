import React from "react";
import StatusMessage from "../CardList/StatusMessage";
import "./Loading.css";

function LoadingMessage() {
  return (
    <StatusMessage>
      <div className="loader"></div>
      <p style={{ fontSize: "1.5rem" }}>Loading movies...</p>
    </StatusMessage>
  );
}

export default LoadingMessage;
