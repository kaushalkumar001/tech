import React from "react";
import { NavLink } from "react-router-dom";

export const Allcomplains = () => {
  return (
    <div className="containera">
      <h2>All Complains</h2>
      <div className="carda">
        <h3 className="card-titlea">1</h3>
        <p className="card-texta">
          This is the description of the complaint coming from the backend
          system
        </p>
        <div className="button-groupa">
          <button className="btn-approved">Approved</button>
          <button className="btn-pending">Pending</button>
          <button className="btn-reject">Reject</button>
        </div>
      </div>
    </div>
  );
};

export default Allcomplains;
