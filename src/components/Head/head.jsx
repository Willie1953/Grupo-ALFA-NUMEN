import Reac from "react"
import './head.css'

export const Head = () =>{

    return(
        <div className="cabecera">
            <img className="imagenlogo" src="../../img/avion.png" alt="avion" />
          <nav className="menu">
                <ul>
                    <li>Nosotros</li>
                    <li>Comprar</li>
                    <li>Destinos</li>
                    <li>Ofertas</li>
                    <li>Contactenos</li>
                </ul>
          </nav>

        </div>
    )
}