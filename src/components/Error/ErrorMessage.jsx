import React from "react";
import StatusMessage from "../CardList/StatusMessage";

function ErrorMessage() {
  return (
    <StatusMessage type="error">
      <h3 style={{ fontSize: "1.5rem" }}>Ups! An unexpected error occurred.</h3>
      <p>Please reload the page and try again.</p>
    </StatusMessage>
  );
}

export default ErrorMessage;
