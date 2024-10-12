import { cn } from "@/utils/tailwind-merge";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/Button";

interface FlightDetailProps {
  title: string;
  currency: string;
  price: number;
  detail: any;
  appliedPromotion: boolean;
  status: "AVAILABLE" | "ERROR";
}

const FlightDetail = React.forwardRef<HTMLElement, FlightDetailProps>(
  ({ title, currency, price, detail, appliedPromotion, status }, ref) => {
    const router = useRouter();
    const onFlightSelectClick = () => {
      let completedFlight = {
        status,
        price,
        currency,
      };

      switch (status) {
        case "AVAILABLE":
          localStorage.setItem(
            "completed-flight",
            JSON.stringify(completedFlight)
          );
          router.push("kabin-secimi-tamamlandi");
          break;

        case "ERROR":
          localStorage.setItem(
            "completed-flight",
            JSON.stringify(completedFlight)
          );
          router.push("kabin-secimi-tamamlanamadi");
          break;

        default:
          break;
      }
    };
    return (
      <div className="w-full">
        <div className="flex justify-between bg-main-gray-third px-2 py-4 w-full">
          <p className="text-lg font-semibold">{title}</p>
          <div className="flex">
            <p className="text-sm">{currency}</p>
            <p className="text-lg">{price}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between border h-[200px] max-h-[200px]">
          <div className="flex flex-col">
            {detail.map((item: any) => {
              return <p className="border-b px-2 py-1">{item}</p>;
            })}
          </div>
          <Button
            text="Uçuşu Seç"
            className={cn(
              "flex justify-center border-t bg-main-red-primary text-white py-2",
              title !== "ecoFly" &&
                appliedPromotion &&
                "bg-main-gray-third text-black"
            )}
            disabled={title !== "ecoFly" && appliedPromotion}
            onClick={() => onFlightSelectClick()}
          />
        </div>
      </div>
    );
  }
);

export default FlightDetail;
