import React from "react";
import logo from "./logo.png";
import Login from "./Login";
import Auth from "../utils/auth";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-600 mb-3 shadow-xl">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img src={logo} className="w-24" alt="logo"></img>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Favourite teams</span>
                </a>
              </li>
            </ul>
            <Login title="Login/SignUp" />
          </div>
        </div>
      </nav>
      {Auth.loggedIn() ? (
        <h1 className="  px-3 text-3xl shadow-md bg-gradient-to-r from-purple-900 to-purple-100 text-center p-2 ">
          <span className="text-white p-2">
            {Auth.getProfile().data.username.toUpperCase()}
          </span>{" "}
        </h1>
      ) : (
        ""
      )}
    </>
  );
}
