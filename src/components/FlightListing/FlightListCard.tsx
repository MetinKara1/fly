import { SubCategory } from "@/models/model";
import React, { useState } from "react";
import FlightClass from "./FlightClass";
import FlightDate from "./FlightDate";
import FlightDetail from "./FlightDetail";

interface FlightListCardProps {
  cardItem: any;
  appliedPromotion: boolean;
}

const FlightListCard = (props: FlightListCardProps) => {
  const [selectedFlightCategory, setSelectedFlightCategory] =
    useState<string>("");

  return (
    <div>
      <div className="flex justify-between w-full gap-6 bg-main-gray-secondary p-4">
        <FlightDate details={props.cardItem} />
        {Object.entries(props.cardItem.fareCategories)
          .reverse()
          .map((item: any) => {
            return (
              <FlightClass
                flightClass={item[0]}
                flightCategory={item[1].subcategories}
                selectedFlightCategory={selectedFlightCategory}
                setSelectedFlightCategory={setSelectedFlightCategory}
              />
            );
          })}
      </div>
      {selectedFlightCategory && (
        <div className="p-4 py-0 bg-main-gray-secondary w-full">
          <div className="flex w-full bg-white gap-4 p-4">
            {props.cardItem.fareCategories[
              selectedFlightCategory
            ].subcategories?.map((item: SubCategory) => {
              return (
                <FlightDetail
                  title={item.brandCode}
                  price={item.price.amount}
                  currency={item.price.currency}
                  detail={item.rights}
                  appliedPromotion={props.appliedPromotion}
                  status={item.status}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightListCard;
