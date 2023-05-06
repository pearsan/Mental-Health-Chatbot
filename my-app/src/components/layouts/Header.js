import React from "react";
import logo from "./Logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header p-5 bg-white shadow-md flex items-center justify-between md:px-10 px-0 py-0 sticky">
      <div className="header--logo">
        <NavLink to="/">
          {" "}
          <img src={logo} alt="" />
        </NavLink>
      </div>
      <nav className="flex sm:justify-center space-x-4">
        {/* {[
          ["Home", "/dashboard"],
          ["Team", "/team"],
          ["Projects", "/projects"],
          ["Reports", "/reports"],
        ].map(([title, url]) => ( */}
        <NavLink
          to="/Talk"
          className={({ isActive }) =>
            isActive
              ? "rounded-lg px-3 py-2 text-white font-medium hover:bg-cyan-600 bg-cyan-300"
              : "rounded-lg px-3 py-2 text-slate-500 font-medium hover:bg-slate-100 hover:text-slate-900"
          }
        >
          Talk
        </NavLink>
        <span className="rounded-lg px-3 py-2 text-slate-500 font-medium hover:bg-slate-100 hover:text-slate-900">
          Services
        </span>
        <NavLink
          to="/Location"
          className={({ isActive }) =>
            isActive
              ? "rounded-lg px-3 py-2 text-white font-medium hover:bg-cyan-600 bg-cyan-300"
              : "rounded-lg px-3 py-2 text-slate-500 font-medium hover:bg-slate-100 hover:text-slate-900"
          }
        >
          Location
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive
              ? "rounded-lg px-3 py-2 text-white font-medium hover:bg-cyan-600 bg-cyan-300 whitespace-nowrap"
              : "rounded-lg px-3 py-2 text-slate-500 font-medium hover:bg-slate-100 hover:text-slate-900 whitespace-nowrap"
          }
        >
          About us
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
