"use client";
import React from "react";
import FlightSelectionForm from "./FlightSelectionForm";

const FlightSelection = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="flex flex-col items-center text-white">
        <h1 className="text-3xl">Merhaba</h1>
        <h2 className="text-2xl">Nereyi keşfetmek istersiniz?</h2>
      </div>
      <div className="mt-8">
        <FlightSelectionForm />
      </div>
    </div>
  );
};

export default FlightSelection;
