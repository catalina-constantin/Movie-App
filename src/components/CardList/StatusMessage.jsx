import React from "react";

const StatusMessage = ({ children, type = "default" }) => {
  return (
    <div className="status-container" data-type={type}>
      {children}
    </div>
  );
};

export default StatusMessage;
