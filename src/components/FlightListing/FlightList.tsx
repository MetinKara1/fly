import React, { useEffect, useMemo, useState } from "react";
import FlightListCard from "./FlightListCard";
import {
  appliedPromotionFlights,
  flightsSortByDepartureTime,
  flightsSortByEco,
} from "@/utils/helpers";

interface FlightListProps {
  appliedPromotion: boolean;
}

const FlightList = (props: FlightListProps) => {
  const [flights, setFlights] = useState<any>([]);

  useEffect(() => {
    let storeFlights = localStorage.getItem("flights");

    if (storeFlights) {
      setFlights(flightsSortByEco(JSON.parse(storeFlights)));
    } else {
      fetch("/api/flights").then(async (res) => {
        const data = await res.json();
        localStorage.setItem("flights", JSON.stringify(data));

        setFlights(flightsSortByEco(data));
      });
    }
  }, []);

  const memoizedFlights = useMemo(() => {
    let promotionFlightsData = appliedPromotionFlights(flights);
    return promotionFlightsData;
  }, [props.appliedPromotion]);

  return (
    <div>
      <div className="bg-main-black-primary">
        <div className="flex justify-end text-white p-2 items-center gap-3">
          <p>Sıralama Kriteri</p>
          <p
            className="border rounded-sm border-white p-1 cursor-pointer"
            onClick={() => {
              setFlights(flightsSortByEco(flights));
            }}
          >
            Ekonomi Kabin Ücreti
          </p>
          <p
            className="border rounded-sm border-white p-1 cursor-pointer"
            onClick={() => {
              let sortedFlights = flightsSortByDepartureTime(flights);
              setFlights(sortedFlights);
            }}
          >
            Kalkış Saati
          </p>
        </div>
      </div>
      {(props.appliedPromotion ? memoizedFlights : flights)?.map(
        (item: any) => {
          return (
            <FlightListCard
              key={item}
              cardItem={item}
              appliedPromotion={props.appliedPromotion}
            />
          );
        }
      )}
    </div>
  );
};

export default FlightList;
