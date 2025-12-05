import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FlavorSection from "./components/FlavorSection";

function App() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <Hero />
      <FlavorSection />
    </>
  );
}

export default App;
