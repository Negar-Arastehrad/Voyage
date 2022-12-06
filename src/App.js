import Events from "./component/Events/Events";
import Explore from "./component/Explore/Explore";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import Tours from "./component/Tours/Tours";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Events />
      <Explore />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
