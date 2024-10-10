"use client";
import React from "react";
import { useIcons } from "../icons/use-icons";
import Input from "../ui/Input";
import SelectPerson from "./SelectPerson";

const FlightSelection = () => {
  const { ArrowIcon, CalendarIcon, PlaneIcon } = useIcons();

  return (
    <div className="flex flex-col justify-center items-center mt-[200px] h-full">
      <div className="flex flex-col items-center text-white">
        <h1 className="text-3xl">Merhaba</h1>
        <h2 className="text-2xl">Nereyi keşfetmek istersiniz?</h2>
      </div>
      <div className="mt-8">
        <div className="flex p-6 bg-main-blue-secondary gap-2">
          <Input
            placeholder="Nereden"
            icon={<PlaneIcon />}
            customInputCss="my-4"
          />
          <Input
            placeholder="Nereye"
            icon={
              <div className="rotate-45">
                <PlaneIcon />
              </div>
            }
            customInputCss="my-4"
          />
          <div className="flex border-0 bg-main-gray-background jusfiyt-center items-center px-2 gap-2">
            <p className="text-white">Tarih</p>
            <CalendarIcon />
          </div>
          <SelectPerson />
          <div className="flex">
            <button type="submit" className="bg-main-red-primary px-4">
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSelection;
