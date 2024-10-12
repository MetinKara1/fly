"use client";
import { SubCategory } from "@/models/model";
import React from "react";
import { useIcons } from "../icons/use-icons";
import { Radio } from "../ui/Radio";

interface FlightClassProps {
  flightClass: string;
  selectedFlightCategory: string;
  setSelectedFlightCategory: (selected: string) => void;
  flightCategory: SubCategory[];
}

const FlightClass = React.forwardRef<HTMLElement, FlightClassProps>(
  (
    {
      flightClass,
      selectedFlightCategory,
      setSelectedFlightCategory,
      flightCategory,
    },
    ref
  ) => {
    const { ArrowIcon } = useIcons();

    return (
      <div
        className="relative flex justify-center items-center bg-white p-4 gap-6"
        onClick={() => {
          setSelectedFlightCategory(flightClass);
        }}
      >
        <div>
          <Radio
            text={flightClass}
            checked={selectedFlightCategory === flightClass}
          />
        </div>
        <div className="w-full">
          <p className="text-sm">Yolcu Başına</p>
          <p className="text-md font-bold">
            {flightCategory[0].price.currency} {flightCategory[0].price.amount}
          </p>
        </div>
        <div className="rotate-90">
          <ArrowIcon stroke="#000" />
        </div>
        {selectedFlightCategory === flightClass && (
          <div className="absolute -bottom-5 bg-white w-full text-white">
            <br />
          </div>
        )}
      </div>
    );
  }
);

export default FlightClass;
