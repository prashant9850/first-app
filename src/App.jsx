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
        <HeroSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
