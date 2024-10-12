"use client";
import { FlightContentModels } from "@/models/model";
import { cn } from "@/utils/tailwind-merge";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useIcons } from "../icons/use-icons";
import { Button } from "../ui/Button";

const Content = () => {
  const { OkIcon, NotOkIcon } = useIcons();
  const router = useRouter();
  const [flightData, setFlightData] = useState<FlightContentModels>({
    status: "ERROR",
    price: 0,
    currency: "TRY",
  });

  useEffect(() => {
    if (localStorage.getItem("completed-flight")) {
      setFlightData(JSON.parse(localStorage.getItem("completed-flight") || ""));
    }
  }, []);

  return (
    <div className="w-1/2 mt-10 mx-auto">
      <div className="flex gap-3 border-b pb-4 w-full">
        <p>{flightData.status === "AVAILABLE" ? <OkIcon /> : <NotOkIcon />}</p>
        <p className="text-xl font-bold">
          Kabin seçiminiz{" "}
          {flightData.status === "AVAILABLE" ? "tamamlandı." : "tamamlanmadı."}
        </p>
      </div>
      {flightData.status === "AVAILABLE" ? (
        <div className="flex justify-between w-full mt-3">
          <p className="text-3xl">Toplam tutar</p>
          <p className="text-3xl text-main-blue-primary">
            {flightData.currency} {flightData.price}
          </p>
        </div>
      ) : (
        <div className="flex justify-end w-full mt-3">
          <Button
            text="Başa Dön"
            className={cn(
              "flex justify-center border-t bg-main-red-primary text-white py-2 px-4 cursor-pointer"
            )}
            onClick={() => router.push("/")}
          />
        </div>
      )}
    </div>
  );
};

export default Content;
