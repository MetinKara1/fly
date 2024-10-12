"use client";
import FlightList from "@/components/FlightListing/FlightList";
import Header from "@/components/Header";
import MainContainer from "@/components/MainContainer";
import Switch from "@/components/ui/Switch";
import React, { useEffect, useState } from "react";

const FlightListing = () => {
  const [peopleCount, setPeopleCount] = useState<number>(0);
  const [appliedPromotion, setAppliedPromotion] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("flightDetail"))
      setPeopleCount(
        JSON.parse(localStorage.getItem("flightDetail") || "")?.peopleCount
      );
  }, []);

  return (
    <MainContainer>
      <Header />
      <div className="flex flex-col justify-center items-center mt-4 h-full">
        <div>
          <div className="w-fit bg-main-red-primary px-3 py-1 mb-2">
            <p className="text-white">Uçuş</p>
          </div>
          <p className="text-xl mb-3">
            İstanbul - Antalya, {peopleCount} Yolcu
          </p>
          <div className="flex items-center gap-3 mb-3">
            <p className="text-md font-bold">Promosyon Kodu</p>
            <Switch
              appliedPromotion={appliedPromotion}
              setAppliedPromotion={setAppliedPromotion}
            />
          </div>
          <div className="flex flex-col gap-4 mb-5">
            <p className="text-sm">
              Promosyon Kodu seçeneği ile tüm Ecnomoy kabini Eco Fly paketlerini
              %50 indirimle satın alabilirsiniz.
            </p>
            <p className="text-sm">
              Promosyon Kodu seçeneği aktifken Eco Fly paketi haricinde seçim
              yapılamamaktadır.
            </p>
          </div>
          <FlightList appliedPromotion={appliedPromotion} />
        </div>
      </div>
    </MainContainer>
  );
};

export default FlightListing;
