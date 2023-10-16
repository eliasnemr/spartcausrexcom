import React, { useState } from "react";
import Grid from "./Components/UI/Grid";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "flowbite";
import { Dropdown } from "flowbite";

const App = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();

  const $targetEl = document.getElementById("dropdownNavbar");

  const $triggerEl = document.getElementById("dropdownButton");

  const dropdown = new Dropdown($targetEl, $triggerEl);

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

          <div className="relative md:hidden">
            <svg
              id="dropdownButton"
              data-dropdown-toggle="dropdownNavbar"
              className="block md:hidden"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
            <nav
              id="dropdownNavbar"
              className=" z-10 hidden bg-slate-900 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <div className="flex flex-col gap-4 p-4">
                <NavLink
                  id="dropdownButton"
                  onClick={() => dropdown.hide()}
                  to="/"
                  className={`${({ isActive }) =>
                    isActive
                      ? "active"
                      : ""} text-slate-100 hover:text-white  hover:cursor-pointer`}
                >
                  Home
                </NavLink>
                <NavLink
                  id="dropdownButton"
                  onClick={() => dropdown.hide()}
                  to="/runanode"
                  className={`${({ isActive }) =>
                    isActive
                      ? "active"
                      : ""} text-slate-100 hover:text-white  hover:cursor-pointer`}
                >
                  Run a node
                </NavLink>
                <NavLink
                  id="dropdownButton"
                  onClick={() => dropdown.hide()}
                  to="/downloads"
                  className={`${({ isActive }) =>
                    isActive
                      ? "active"
                      : ""} text-slate-100 hover:text-white hover:cursor-pointer`}
                >
                  Downloads
                </NavLink>
                <NavLink
                  id="dropdownButton"
                  onClick={() => dropdown.hide()}
                  to="/blog"
                  className={`${({ isActive }) =>
                    isActive
                      ? "active"
                      : ""} text-slate-100 hover:text-white hover:cursor-pointer`}
                >
                  Blog
                </NavLink>
              </div>
            </nav>
          </div>
          {/* {!displayMenu && (
          )} */}
          {/* {!!displayMenu && (
            <div className="dropdown">
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
              
            </div>
          )} */}
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
