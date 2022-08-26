import { Carousel } from "flowbite-react";
import Bariloche from "../../Images/Bariloche.png";
import Cartagena from "../../Images/Cartagena.png";
import Peru from "../../Images/MachuPicchu.png";
import Cuba from "../../Images/Varadero.png";

const Slide = () => {
  return (
    <>
      <h2 className="text-lg font-semibold text-center capitalize w-full lg:w-4/5 lg:mx-[10%] xl:w-3/4 xl:mx-12 2xl:w-2/3">
        No te pierdas nuestras ofertas limitadas con pasajes a los siguientes
        destinos hasta el 30 de Septiembre!!!
      </h2>
      <div className="w-full lg:w-4/5 lg:mx-[10%] xl:w-2/3 xl:mx-[16.66666%] h-[400px] sm:h-[465px] md:h-[607px] lg:h-[600px] xl:h-[630px]">
        <Carousel slideInterval={5000}>
          <img src={Bariloche} alt="..." />
          <img src={Cartagena} alt="..." />
          <img src={Peru} alt="..." />
          <img src={Cuba} alt="..." />
        </Carousel>
      </div>
    </>
  );
};

export default Slide;
