import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();
  function pathMatchRoute(route) {
    if (route === location.pathname) return true;
  }

  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto ">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer "
            onClick={() => navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10 text-gray-400">
            <li
              className={`${
                pathMatchRoute("/")
                  ? "text-blue-700  border-b-blue-700 border-b-[3px] font-semibold"
                  : ""
              } cursor-pointer py-3 text-sm   `}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`${
                pathMatchRoute("/offers")
                  ? "text-blue-700  border-b-blue-700 border-b-[3px] font-semibold"
                  : ""
              } cursor-pointer py-3 text-sm    `}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`${
                pathMatchRoute("/sign-in")
                  ? "text-blue-700  border-b-blue-700 border-b-[3px] font-semibold"
                  : ""
              } cursor-pointer py-3 text-sm     `}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
