import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import FuelSection from "./components/FuelSection";
import Navbar from "./components/Navbar";
import FlavorSection from "./components/FlavorSection";

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <FuelSection />
      <FlavorSection />
    </>
  );
}

export default App;
