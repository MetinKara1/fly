"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import SelectPerson from "./SelectPerson";
import * as _ from "lodash";
import Select from "../ui/Select";
import { Button } from "../ui/Button";
import { useIcons } from "../icons/use-icons";
import ErrorModal from "./ErrorModal";

interface IFormInput {
  from: string;
  to: string;
  passengerType: string;
  peopleCount: number;
}

const FlightSelectionForm = () => {
  const { ArrowIcon, CalendarIcon, PlaneIcon, WorldIcon } = useIcons();
  const router = useRouter();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      from: "",
      to: "",
      passengerType: "",
      peopleCount: 0,
    },
  });
  const [errorContent, setErrorContent] = useState<string>("");
  const [visible, setVisible] = useState(false);
  const [originAirports, setOriginAirports] = useState<any>([]);
  const [destinationAirports, setDestinationAirports] = useState<any>([]);

  useEffect(() => {
    fetch("/api/flights").then(async (res) => {
      const data = await res.json();
      localStorage.setItem("flights", JSON.stringify(data));

      let airports: { value: string; label: string }[] = data.map(
        (item: any) => {
          return {
            value: item.originAirport.code,
            label: item.originAirport.name,
          };
        }
      );
      setOriginAirports(_.uniqBy(airports, "value"));

      let destinatinations = data.map((item: any) => {
        return {
          value: item.destinationAirport.code,
          label: item.destinationAirport.name,
        };
      });
      setDestinationAirports(_.uniqBy(destinatinations, "value"));
    });
  }, []);

  const onSubmit: SubmitHandler<IFormInput> = (data: any) => {
    if (!data.from) {
      setVisible(true);
      setErrorContent("Lütfen bir kalkış noktası seçin");
      return;
    }
    if (!data.to) {
      setVisible(true);
      setErrorContent("Lütfen bir varış noktası seçin");
      return;
    }
    if (data.passengerType <= 0) {
      setVisible(true);
      setErrorContent("Lütfen uçuş tipi seçin");
      return;
    }
    if (data.peopleCount <= 0) {
      setVisible(true);
      setErrorContent("Lütfen yolcu sayısını seçin");
      return;
    }

    localStorage.setItem("flightDetail", JSON.stringify(data));

    router.push("/ucus-listeleme");
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mobile:flex mobile:flex-col tablet:flex tablet:flex-row p-6 bg-main-blue-secondary gap-2">
          <Select
            id="from"
            name="from"
            control={control}
            options={originAirports}
            placeholder="Nereden"
            icon={
              <div className="rotate-45">
                <PlaneIcon />
              </div>
            }
            optionIcon={<WorldIcon />}
          />
          <Select
            id="to"
            name="to"
            control={control}
            options={destinationAirports}
            placeholder="Nereye"
            icon={
              <div className="rotate-[120deg]">
                <PlaneIcon />
              </div>
            }
            optionIcon={<WorldIcon />}
          />
          <div className="flex border-0 bg-main-gray-background jusfiyt-center items-center px-2 gap-2">
            <p className="text-white">Tarih</p>
            <CalendarIcon />
          </div>
          <SelectPerson control={control} name="peopleCount" />
          <div className="flex">
            <Button
              id="submit"
              className="bg-main-red-primary px-4"
              type="submit"
            >
              <ArrowIcon />
            </Button>
          </div>
        </div>
      </form>
      <ErrorModal
        content={errorContent}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
};

export default FlightSelectionForm;
