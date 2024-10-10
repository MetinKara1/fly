import React from "react";
import MainContainer from "@/components/MainContainer";
import Header from "@/components/Header";
import FlightSelection from "@/components/FlightInquiry/FlightSelection";

const FlightInquiry = () => {
  return (
    <MainContainer>
      <Header />
      <FlightSelection />
    </MainContainer>
  );
};

export default FlightInquiry;
