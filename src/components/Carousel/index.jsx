import { Carousel } from "flowbite-react";
import Bariloche from "../../Images/Bariloche.png";
import Cartagena from "../../Images/Cartagena.png";
import Peru from "../../Images/MachuPicchu.png";
import Cuba from "../../Images/Varadero.png";

const Slide = () => {
  return (
    <>
      <h2 className="text-lg text-orange-500 text-shadow font-semibold text-center capitalize w-full lg:w-4/5 lg:mx-[10%] xl:w-3/4 xl:mx-12 2xl:w-2/3">
       70% off !! Mejores destinos 
      </h2>
      <div className="w-full h-[250px] lg:w-4/5 lg:mx-[10%] xl:w-2/3 xl:mx-[16.66666%] sm:h-[465px] md:h-[607px] lg:h-[600px] xl:h-[630px]">
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
