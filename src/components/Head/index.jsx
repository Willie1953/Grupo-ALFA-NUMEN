/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import React from "react";
import logo from "../../img/logo-alfa-blanco.png";

export const Head = ({value}) => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between px-6 pt-6 bg-gradient-to-b from-cyan-600 to-cyan-300">
      <div className="flex items-center flex-shrink-0 mb-3 ml-6 mr-1 text-white">
        <img src={logo} className="w-20 h-20" />
      </div>

      <div className="block sm:hidden">
        <button
          className="flex items-center px-3 py-2 mr-3 text-white border border-white rounded"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          menu ? "" : "hidden "
        } w-full block flex-grow bg- sm:flex sm:items-center sm:w-auto`}
      >
        <div className="text-sm text-center sm:flex-grow">
          <a
            href="#Doc"
            className="block mt-4 mr-4 text-white sm:inline-block sm:mt-0 hover:text-teal-200"
          >
            Nosotros
          </a>

          <a
            href="#Ejemplo"
            className="block mt-4 mr-4 text-white sm:inline-block sm:mt-0 hover:text-teal-200"
          >
            Destinos
          </a>

          <a
            href="#Block"
            className="block mt-4 mr-4 text-white sm:inline-block sm:mt-0 hover:text-teal-200"
          >
            Ofertas
          </a>
        </div>

        <div className="flex flex-col items-center pt-2 mr-6 sm:block">
          <button className="pt-2 pl-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </button>

          <button className="pt-2 pl-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          
          <button className="relative pt-0 pl-2 mt-0">
          <div className="absolute w-4 text-xs rounded-full h-fit bg-cyan-200 bottom-4 left-5 px-auto">{value}</div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            
          </button>
        </div>

        <div className="mb-2 text-sm text-center sm:flex-grow sm:hidden">
          <a
            href="#Usuario"
            className="block mt-4 mr-4 text-white sm:inline-block sm:mt-0 hover:text-teal-200"
          >
            Usuario
          </a>

          <a
            href="#Buscar"
            className="block mt-4 mr-4 text-white sm:inline-block sm:mt-0 hover:text-teal-200"
          >
            Buscar
          </a>

          <a
            href="#Carrito"
            className="block mt-4 mr-4 text-white sm:inline-block sm:mt-0 hover:text-teal-200"
          >
            Carrito
          </a>
        </div>
      </div>
    </nav>
  );
};
