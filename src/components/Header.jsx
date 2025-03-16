import React from "react";
import { Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/solid"; // Changed to solid icon

function Header() {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-xl h-20">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 h-20"
        aria-label="Global"
      >
        <div className="flex items-center flex-none">
          <Link to="/" className="no-underline">
            <span
              className="font-bold text-4xl tracking-widest text-red-600 italic font-['Futura', 'Helvetica', sans-serif]"
              style={{ letterSpacing: "0.08em" }}
            >
              DECKBAE
              <span className="text-xs align-text-top relative top-[0.8em] ml-0.5">
                TM
              </span>
            </span>
          </Link>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div className="flex gap-x-12">
            <Link
              to="/"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic"
            >
              Főoldal
            </Link>
            <Link
              to="/houses"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic"
            >
              Típusházaink
            </Link>
            <Link
              to="/extras"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic"
            >
              Kiegészítések
            </Link>
            <Link
              to="/team"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic"
            >
              Csapat
            </Link>
            <Link
              to="/contact"
              className="text-lg font-semibold leading-6 text-black hover:text-slate-500 ease-in-out duration-50 italic"
            >
              Kontakt
            </Link>
          </div>
        </div>
        <div
          className="flex-none flex items-center justify-end"
          style={{ width: "180px" }}
        >
          <a
            href="tel:+36306127858"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 font-semibold italic"
          >
            <PhoneIcon className="h-5 w-5 text-red-600" />
            <span>+36 30 612 7858</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
