import React from "react";
import StatusMessage from "../CardList/StatusMessage";

function NotFoundMessage() {
  return (
    <StatusMessage type="empty">
      <h3 style={{ fontSize: "1.5rem" }}>Movie not found</h3>
      <p>The movie you're looking for doesn't exist.</p>
    </StatusMessage>
  );
}

export default NotFoundMessage;
