import React from "react";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";
import FlightSelection from "@/components/FlightInquiry/FlightSelection";

const FlightInquiry = () => {
  return (
    <div className="absolute w-full h-[100vh] bg-main-blue-primary">
      <MainContainer>
        <Header mode="dark" />
        <FlightSelection />
      </MainContainer>
    </div>
  );
};

export default FlightInquiry;
