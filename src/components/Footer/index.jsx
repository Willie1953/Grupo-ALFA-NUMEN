import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { TbBrandTwitter } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";
import { AiOutlineWifi } from "react-icons/ai";
import { IoLogoUsd } from "react-icons/io";
import { BiEuro } from "react-icons/bi";
import { HiOutlineCurrencyYen } from "react-icons/hi";
import { FaPoundSign } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";

const Footer = () => {
  return (
    <>
      <div className="w-auto text-white border-b-8 h-fit">
        <div className='flex flex-row p-1 text-xs text-center caja1 items-strech bg-slate-500 sm:text-3xl sm:font-light'>
          <div className="w-2/4 mt-1 ml-2 subcaja1">
            <u>ATENCION AL CLIENTE</u>
            <b />
            <ul className="list-none">
              <li>Contacto</li>
              <li className="flex flex-row justify-center gap-2">
                <AiOutlineWifi className="hover:invisible"/>
                <FaWhatsapp className="hover:text-blue-600"/>
                <RiFacebookLine className="hover:animate-bounce hover:text-yellow-800"/>
                <TbBrandTwitter className="hover:text-green-600"/>
                <RiYoutubeLine className="hover:animate-spin"/>
              </li>
              <br />
              <li>Tarifas</li>
              <li className="flex flex-row justify-center gap-2">
                <IoLogoUsd className="hover:text-2xl hover:text-amber-400"/>
                <BiEuro className="hover:text-3xl hover:text-amber-400"/>
                <HiOutlineCurrencyYen className="hover:text-4xl hover:text-amber-400"/>
                <FaPoundSign className="hover:text-5xl hover:text-amber-400"/>
              </li>
              <br />
              <li>Servicios opcionales y</li>
              <li>Tarifas de equipaje</li>
            </ul>
          </div>
          <div className="w-2/4 mt-1 mr-1 subcaja2">
            <u>OFERTA ESPECIAL</u>
            <ul>
              <li>Oferta especial</li>
              <li>Servicios de conexion</li>
              <li>con otras empresas</li>
            </ul>
            <br />
            <u>SOBRE ALFAFLIGHT</u>
            <ul>
              <li>Oferta de carreras</li>
              <li>Mapa del sitio</li>
            </ul>
          </div>
        </div>
        <div className='p-1 text-xs text-center text-white h-fit bg-sky-900 caja2 sm:text-3xl sm:font-light'>
          <div className="flex justify-center"><FcEngineering  /></div>    
          <br />
          <div className="flex justify-center text-bold"><FcServices />ALFA LINEAS AEREAS</div>
          <br />
          STAR ALLIANCE
          <br />
          Condiciones generales de Equipaje y Tarifas
          <br />
          Politicas de Privacidad de Datos
          <hr />
          2022
          <br />
          <div >
            <button className="px-2 py-1 m-1 font-bold text-black bg-white shadow-inner shadow-black rounded-3xl hover:bg-sky-700 hover:text-white">
              Encuesta</button>
            <br />
          </div>
        </div>
      </div>

    </>
  );
};
export default Footer;
