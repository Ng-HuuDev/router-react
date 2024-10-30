import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <NavLink to="/" className="btn btn-primary">
        Home{" "}
      </NavLink>
      <NavLink to="/use-effect" className="btn btn-success mx-2">
        {" "}
        UseEffect{" "}
      </NavLink>
    </div>
  );
}
