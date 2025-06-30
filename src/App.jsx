import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/heroSection.jsx";
import FeatureSection from "./components/featureSection.jsx";
import WorkFlowSection from "./components/WorkFlowSection.jsx";
import Pricing from "./components/pricing.jsx";
import Testimonials from "./components/Testimonials.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white overflow-x-hidden overflow-y-hidden p-0 m-0 h-full w-full">
        <Navbar />
        <div className="max-w-7xl mx-auto px-6">
          <HeroSection />
          <FeatureSection />
          <WorkFlowSection />
          <Pricing />
          <Testimonials />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
