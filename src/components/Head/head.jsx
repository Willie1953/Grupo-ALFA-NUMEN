import { useState } from "react";
import React from "react";

export const Head = () => {

    const [menu, setMenu]=useState(false);
    const toggleMenu = ()=>{
        setMenu(!menu)
    }

    return (

        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-b from-cyan-600 to-cyan-300 ">
            <div className="flex items-center flex-shrink-0 text-white ml-6 mr-1">

                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.or/2000/svg">
                    <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.5 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8"/>
                </svg>
            
                <span className="font-semibold text-xl tracking-tight">ALFA Aerolinea</span>
            </div>

            <div className="block sm:hidden">
                <button className="flex items-center px-3 py-2 mr-3 border rounded text-teal-200 border-teal-400 hover:text-white" onClick={toggleMenu}>

                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>

                </button>
            </div>

            <div className={`${menu ? '':'hidden '} w-full block flex-grow bg- sm:flex sm:items-center sm:w-auto`}>
                <div className="text-sm sm:flex-grow text-center">
                    <a href="#Doc" className="block text-white mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Nosotros</a>

                    <a href="#Ejemplo" className="block text-white mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Destinos</a>

                    <a href="#Block" className="block text-white mt-4 text-white sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Ofertas</a>
                </div>

                <div className="hidden flex flex-col items-center pt-2 mr-6 sm:block">
                    <button className="pt-2 pl-2">
                        <svg className='w-6 h-6' fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    </button>

                    <button className="pt-2 pl-2">
                        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>

                    <button className="pt-2 pl-2">
                       <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </button>
                </div>
                
                <div className="text-sm sm:flex-grow text-center sm:hidden">
                    <a href="#Usuario" className="block text-white mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Usuario</a>

                    <a href="#Buscar" className="block text-white mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Buscar</a>

                    <a href="#Carrito" className="block text-white mt-4 text-white sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Carrito</a>
                </div>


            </div>

        </nav>

    )
}