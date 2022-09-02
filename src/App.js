import Advertencia from "./components/Advertencia";
import Slide from "./components/Carousel";
import Footer from "./components/Footer";
import { Head } from "./components/Head";
import Banner from "./components/Banner";

function App() {
  return (
    <div>
      <Advertencia />
      <Head />
      <Banner />
      <Slide />
      <Footer />
    </div>
  );
}

export default App;
