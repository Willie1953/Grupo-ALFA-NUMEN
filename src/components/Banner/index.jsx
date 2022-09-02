import BannerImg from "../../img/nosotros.jpg";

const Banner = ()=>{
    return(
        <div className="relative flex items-center mt-1 sm:max-width sm:h-1/2">
            <img src={BannerImg} alt="banner" className="" />
            <div className="absolute justify-center flex-col">
                <h2 className="text-lg text-lime-500 mt-8 ml-8">Desde Nuestros Inicios</h2>
                <h6 className="text-sm text-white pl-8">Te acompañamos y apoyamos..</h6>
                <button className="bg-orange-500 border-white rounded hover:bg-lime-500 text-white ml-14 py-1 px-1">Conocenos</button>
            </div>
        </div>

    );
} 
export default Banner;