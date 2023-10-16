import React, { useState } from "react";
import Grid from "./Components/UI/Grid";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const App = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <Grid
      title={
        <div className="flex justify-between items-center w-full">
          <h1
            onClick={() => navigate("/")}
            className="text-left font-bold hover:cursor-pointer hover:text-slate-400"
          >
            Spartacus Rex
          </h1>
          <nav className="gap-4 hidden md:flex">
            <NavLink
              to="/"
              className={`${({ isActive }) =>
                isActive
                  ? "active"
                  : ""} text-slate-700 hover:text-black  hover:cursor-pointer`}
            >
              Home
            </NavLink>
            <NavLink
              to="/runanode"
              className={`${({ isActive }) =>
                isActive
                  ? "active"
                  : ""} text-slate-700 hover:text-black  hover:cursor-pointer`}
            >
              Run a node
            </NavLink>
            <NavLink
              to="/downloads"
              className={`${({ isActive }) =>
                isActive
                  ? "active"
                  : ""} text-slate-700 hover:text-black  hover:cursor-pointer`}
            >
              Downloads
            </NavLink>
            <NavLink
              to="/blog"
              className={`${({ isActive }) =>
                isActive
                  ? "active"
                  : ""} text-slate-700 hover:text-black  hover:cursor-pointer`}
            >
              Blog
            </NavLink>
          </nav>

          {!displayMenu && (
            <svg
              onClick={() => setDisplayMenu(true)}
              className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          )}
          {!!displayMenu && (
            <svg
              onClick={() => setDisplayMenu(false)}
              className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M120-240v-80h520v80H120Zm664-40L584-480l200-200 56 56-144 144 144 144-56 56ZM120-440v-80h400v80H120Zm0-200v-80h520v80H120Z" />
            </svg>
          )}
        </div>
      }
    >
      <div className="mx-4 p-4 rounded-lg h-max">
        <Outlet />
      </div>
    </Grid>
  );
};

export default App;
