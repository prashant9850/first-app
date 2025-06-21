import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />

      <div className="h-screen">
        <p className="font-[Poppins]">hello moto</p>
        <h1>kya bolti public</h1>
      </div>

      <Footer />
    </>
  );
}

export default App;
