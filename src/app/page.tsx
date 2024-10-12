import FlightSelection from "@/components/FlightInquiry/FlightSelection";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute w-full h-[100vh] bg-main-blue-primary">
      <MainContainer>
        <Header mode="dark" />
        <FlightSelection />
      </MainContainer>
    </div>
  );
}
