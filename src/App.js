import Advertencia from "./components/Advertencia";
import Slide from "./components/Carousel";
import Footer from "./components/Footer";
import { Head } from "./components/Head";

function App() {
  return (
    <div>
      <Advertencia />
      <Head />
      <Banner />
      <Slide />
      <Quienessomos/>
      <Footer />
    </div>
  );
}

export default App;
