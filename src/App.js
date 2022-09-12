import Advertencia from "./components/Advertencia";
import Slide from "./components/Carousel";
import Footer from "./components/Footer";
import { Head } from "./components/Head";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState(0)
  return (
    <div>
      <Advertencia />
      <Head value={carrito} />
      <Slide />
      <Cards value={carrito} setValue={setCarrito}/>
      <Footer />
    </div>
  );
}

export default App;
