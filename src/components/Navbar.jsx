import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 font-[Poppins] bg-black ">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="logo" className="h-10 w-10 mr-2" />
              <span className="text-xl tracking-tight">virtualR</span>
            </div>

            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 px-3">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <a href="#" className="py-2 px-3 border rounded-md">
                Sign In
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 border rounded-md"
              >
                Create an Account
              </a>
            </div>

            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {mobileDrawerOpen && (
            <div className="absolute right-4 mt-2 z-40 bg-neutral-900 w-fit p-4 flex flex-col items-end rounded-md shadow-lg lg:hidden">
              <ul className="flex flex-col space-y-4 pr-2 pt-2">
                {navItems.map((item, index) => (
                  <li key={index} className="text-white">
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
