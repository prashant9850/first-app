import React from "react";

function Adding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-8">Our Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <Card
          title="Real-time Slot Monitoring"
          description="Track parking slot availability instantly with live updates from sensors."
        />
        <Card
          title="Easy Booking System"
          description="Book parking spots in advance with just a few clicks through our app or website."
        />
      </div>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Adding;
