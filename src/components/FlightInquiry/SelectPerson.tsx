import React, { useEffect, useMemo, useState } from "react";
import { useController } from "react-hook-form";
import { useIcons } from "../icons/use-icons";
import { Button } from "../ui/Button";
import { Popper } from "../ui/Popper";
import Radio from "../ui/FormElements/Radio";

const SelectPerson = ({ control, name }: any) => {
  const { UserIcon, UsersIcon } = useIcons();
  const { field } = useController({ control, name });
  const [visible, setVisible] = useState(false);
  const [peopleCount, setPeopleCount] = useState(0);

  const onPeopleCountButtonClick = (type: string) => {
    switch (type) {
      case "increment":
        let count = peopleCount + 1;
        setPeopleCount(count);
        field.onChange(count);
        break;

      case "decrement":
        if (peopleCount !== 0) {
          let count = peopleCount - 1;
          setPeopleCount(count);
          field.onChange(count);
        }
        break;

      default:
        break;
    }
  };

  const referenceElement = useMemo(
    () => (
      <div
        id="select-flight-category"
        className="bg-main-gray-background h-full block p-1 cursor-pointer"
        onClick={() => setVisible(true)}
      >
        <p className="flex justify-end text-white pr-1">{peopleCount}</p>
        <div className="flex jusfiyt-center items-center px-8">
          {peopleCount > 1 ? <UsersIcon /> : <UserIcon />}
        </div>
      </div>
    ),
    [peopleCount]
  );

  const popperElement = useMemo(
    () => (
      <div className="bg-white p-4 border-0 rounded-md mt-1">
        <h1 className="mb-4 font-bold text-main-gray-primary">
          Kabin ve yolcu seçimi
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Radio
            name="passengerType"
            control={control}
            value="economy"
            label="Economy Class"
            className="text-main-gray-primary font-semibold"
            customInputCss="flight-category"
          />
          <Radio
            name="passengerType"
            control={control}
            value="bussiness"
            label="Bussiness Class"
            className="text-main-gray-primary font-semibold"
            customInputCss="flight-category"
          />
        </div>
        <div className="flex justify-between mt-6 items-center">
          <p className="font-semibold">Yolcu</p>
          <div className="flex gap-4 items-center">
            <Button
              text="-"
              className="border-0 rounded-md bg-main-gray-secondary px-3 py-1"
              onClick={() => onPeopleCountButtonClick("decrement")}
              type="button"
            />
            <span>{peopleCount}</span>
            <Button
              id="increment-people-count"
              text="+"
              className="border-0 rounded-md bg-main-gray-secondary px-3 py-1"
              onClick={() => onPeopleCountButtonClick("increment")}
              type="button"
            />
          </div>
        </div>
      </div>
    ),
    [peopleCount]
  );

  return (
    <Popper
      visible={visible}
      setVisible={setVisible}
      referenceElement={referenceElement}
      popperElement={popperElement}
    />
  );
};

export default SelectPerson;
