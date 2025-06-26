import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/heroSection.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <div className="max-w-7xl pt-20 mx-auto px-6">
          <HeroSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
