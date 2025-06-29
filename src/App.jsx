import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/heroSection.jsx";
import FeatureSection from "./components/featureSection.jsx";
import WorkFlowSection from "./components/WorkFlowSection.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6">
          <HeroSection />
          <FeatureSection />
          <WorkFlowSection />
        </div>
      </div>
    </>
  );
}

export default App;
