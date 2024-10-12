import React from "react";

interface FlightDateProps {
  details: any;
}

const FlightDate = (props: FlightDateProps) => {
  return (
    <div className="flex justify-between w-full gap-8 bg-white p-4">
      <div className="flex justify-between w-full items-center">
        <div>
          <p>{props.details.departureDateTimeDisplay}</p>
          <p>{props.details.originAirport.city.code}</p>
          <p>{props.details.originAirport.city.name}</p>
        </div>
        <div className="border-t w-full"></div>
        <div className="flex flex-col items-end">
          <p>{props.details.arrivalDateTimeDisplay}</p>
          <p>{props.details.destinationAirport.city.code}</p>
          <p>{props.details.destinationAirport.city.name}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <p>Uçuş Süresi</p>
        <p>{props.details.flightDuration}</p>
      </div>
    </div>
  );
};

export default FlightDate;
