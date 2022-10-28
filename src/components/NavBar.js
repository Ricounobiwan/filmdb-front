import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a className="flex items-center py-4 px-2" href="#">
                {/* <img
                  className="h-8 w-8 mr-2"
                  src="./images/bassClef.png"
                  alt="F"
                /> */}
                <span className="font-extrabold text-black text-xl">
                  Film Database
                </span>
              </a>
            </div>
            <div className="hidden items-center md:flex space-x-2">
              <a
                className="py-4 mt-1 px-2 text-green-500 border-green-500 border-b-4 font-semibold"
                href="#"
              >
                Home
              </a>

              <a
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                href="#"
              >
                Actors
              </a>
              {/* </Link> */}
              <a
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                href="#"
              >
                Directors
              </a>
              <a
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                href="#"
              >
                Stats
              </a>
              <a
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                href="#"
              >
                IMDb
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
