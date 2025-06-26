import React, { useState } from "react";

const getRandomColor = () => {
  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
    "bg-cyan-500",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const HeroSection = () => {
  const [card1Color, setCard1Color] = useState(getRandomColor());
  const [card2Color, setCard2Color] = useState(getRandomColor());

  const handleCard1Click = () => {
    setCard1Color(getRandomColor());
  };

  const handleCard2Click = () => {
    setCard2Color(getRandomColor());
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="flex gap-8">
        <div
          className={`w-48 h-64 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${card1Color}`}
          onClick={handleCard1Click}
        >
          <p className="text-white text-center mt-28 font-semibold">Card 1</p>
        </div>
        <div
          className={`w-48 h-64 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${card2Color}`}
          onClick={handleCard2Click}
        >
          <p className="text-white text-center mt-28 font-semibold">Card 2</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
