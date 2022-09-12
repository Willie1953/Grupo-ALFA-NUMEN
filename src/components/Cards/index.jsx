import Esquel from "./imgs/Esquel.jpg"
import Rosario from "./imgs/Rosario.jpg"
import Mendoza from "./imgs/Mendoza.jpg"
import Ushuaia from "./imgs/Ushuaia.jpg"


const Cards = ({value, setValue}) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-center">DESTINOS NACIONALES MAS VISITADOS</h2>
      <div className="flex flex-wrap justify-center w-full">
        {/* {Cards} */}
        <div className="w-[230px] border-2 border-sky-200 rounded-md h-[250px] bg-teal-50  my-2 mx-7">
          <img src={Esquel} alt="" />
          <p>Salida: Buenos Aires</p>
          <p>Destino: Esquel</p>
          <p>Precio: ARS 25008</p>
          <p className="mx-auto text-sm font-semibold cursor-pointer text-cyan-500 w-fit" onClick={() => setValue(value + 1)}>Agregar al carrito</p>
        </div>
        <div className="w-[230px] border-2 border-sky-200 rounded-md h-[250px] bg-teal-50  my-2 mx-7">
          <img src={Rosario} alt="" />
          <p>Salida: Buenos Aires</p>
          <p>Destino: Rosario</p>
          <p>Precio: ARS 15222</p>
          <p className="mx-auto text-sm font-semibold cursor-pointer text-cyan-500 w-fit" onClick={() => setValue(value + 1)}>Agregar al carrito</p>
        </div>
        <div className="w-[230px] border-2 border-sky-200 rounded-md h-[250px] bg-teal-50  my-2 mx-7">
          <img src={Mendoza} alt="" />
          <p>Salida: Córdoba</p>
          <p>Destino: Mendoza</p>
          <p>Precio: ARS 18139</p>
          <p className="mx-auto text-sm font-semibold cursor-pointer text-cyan-500 w-fit" onClick={() => setValue(value + 1)}>Agregar al carrito</p>
        </div>
        <div className="w-[230px] border-2 border-sky-200 rounded-md h-[250px] bg-teal-50  my-2 mx-7">
          <img src={Ushuaia} alt="" />
          <p>Salida: Buenos Aires</p>
          <p>Destino: Ushuaia</p>
          <p>Precio: ARS 29717</p>
          <p className="mx-auto text-sm font-semibold cursor-pointer text-cyan-500 w-fit" onClick={() => setValue(value + 1)}>Agregar al carrito</p>
        </div>
      </div>
    </div>
  );
};

export default Cards; 

