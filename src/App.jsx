import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Adding from "./components/adding.jsx";
function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Adding />
        <Footer />
      </div>
    </>
  );
}

export default App;
