import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import FuelSection from "./components/FuelSection";
import Navbar from "./components/Navbar";
import FlavorSection from "./components/FlavorSection";
import LifestyleSection from "./components/LifestyleSection";

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <FuelSection />
      <LifestyleSection />
      <FlavorSection />
    </>
  );
}

export default App;
