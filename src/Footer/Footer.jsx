import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {RiFacebookLine} from 'react-icons/ri'
import {TbBrandTwitter} from 'react-icons/tb'
import {RiYoutubeLine} from 'react-icons/ri'
import {AiOutlineWifi} from 'react-icons/ai'
import {IoLogoUsd} from 'react-icons/io'
import {BiEuro} from 'react-icons/bi'
import {HiOutlineCurrencyYen} from 'react-icons/hi'
import {FaPoundSign} from 'react-icons/fa'
import {FcServices} from 'react-icons/fc'
import {FcEngineering} from "react-icons/fc"



const Footer = () => {
    return (
        <>
            <div className='caja1 bg-cyan-600 flex-row justify-around h-fit gap-0.5'>
                <div className='subcaja1 mt-1 place-items-start' >
                    <u>ATENCION AL CLIENTE</u>
                        <br/> <br />
                        <ul className='lista list-none mt-px gap-px'>
                            <li>Contacto</li>
                            <li><AiOutlineWifi/> <FaWhatsapp/> <RiFacebookLine/> <TbBrandTwitter/> <RiYoutubeLine/> </li>
                            <br />
                            <li>Tarifas</li>
                            <li><IoLogoUsd/> <BiEuro/> <HiOutlineCurrencyYen/> <FaPoundSign/></li>
                            <br />
                            <li>Servicios opcionales</li>
                        </ul>
                </div>
                <div className='subcaja2 place-items-start' >
                    <u>OFERTA ESPECIAL</u>
                    <ul className='lista list-none mt-px gap-px'>
                        <li>Oferta especial</li>
                        <li>Servicios de conexion</li>
                        <li>con otras empresas</li>
                    </ul>
                    <br />
                    <u>SOBRE ALFAFLIGHT</u>
                    <ul className="lista">
                        <li>Oferta de carreras</li>
                        <li>Mapa del sitio</li>
                    </ul>
                </div>
            </div>
            <div className='caja2 bg-cyan-900 text-white text-center'>
                    <FcEngineering/>
                    <br />
                    <FcServices/>ALFAFLIGHT
                    <br />
                    STAR ALLIANCE
                    <br />
                    Condiciones generales de Equipaje y Tarifas
                    <br />
                    Politicas de Privacidad de Datos
                    <hr />
                    2022
                    <br />
                    <div classeName='flex-grow item-center py-4 py-2m-2'>
                        <button className='encuesta text-black rounded-md hover:first-letter:text-7xl first-letter:font-bold text-lg bg-blue-900'>
                                Encuesta
                        </button>
                        <br />
                    </div>    
            </div>
        </>
    )
}
export default Footer

