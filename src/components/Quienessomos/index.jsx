import React from 'react'
import Ushuaia from "../../Images/Ushuaia.png";

const index = () => {
    return (
        <>
            <h2 className="p-1 mb-8 text-center text-blue-500 underline transition titulo sm:text-4xl hover:animate-spin">
                QUIENES SOMOS Y QUE OFRECEMOS
                <br/>
            </h2>
            <div className="flex flex-col w-full justify-items-center sm:text-lg sm:flex-row">
                <div className="p-1 text-sm text-center text-white bg-slate-500 sm:text-2xl sm:bg-gradient-to-b from-sky-700 to-slate-500 sm:w-2/4 hover:text-xl">
                    Disfrute un verano o un invierno
                    Viva la naturaleza como nunca antes. La belleza y las maravillas naturales están al alcance de su mano gracias a los vuelos a ciudades como Iguazú, Bariloche o Ushuaia.
                    <br /><br />
                    Puede practicar remo en lagos de aguas cristalinas, hacer una excursión por la naturaleza, relajarse en un parque nacional y disfrutar del sky o del surf.
                    <br /><br />
                    Sea cual sea su itinerario, el verano en Argentina está lleno de momentos inolvidables de costa a la montaña y del altiplano al Canal Beagle y nosotros estamos aqui para satisfacerlo. Disfrute Argentina.
                </div>
                <div className="p-1 sm:flex sm:items-center sm:w-2/4">
                    <img src={Ushuaia} alt="Que ofrecemos" className="sm:hover:animate-pulse"/>
                </div>
            </div>
        </>
    )
}

export default index

