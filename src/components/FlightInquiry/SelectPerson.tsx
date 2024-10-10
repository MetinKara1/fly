import React, { useEffect, useMemo, useState } from "react";
import { useIcons } from "../icons/use-icons";
import { Button } from "../ui/Button";
import { Popper } from "../ui/Popper";
import { Radio } from "../ui/Radio";

const SelectPerson = () => {
  const { UserIcon, UsersIcon } = useIcons();
  const [visible, setVisible] = useState(false);
  const [peopleCount, setPeopleCount] = useState(1);
  const [mouseEvent, setMouseEvent] = useState<boolean>(false);

  useEffect(() => {
    if (mouseEvent) setVisible(true);
  }, [mouseEvent]);

  const onPeopleCountButtonClick = (type: string) => {
    switch (type) {
      case "increment":
        setPeopleCount(peopleCount + 1);
        break;

      case "decrement":
        if (peopleCount !== 0) setPeopleCount(peopleCount - 1);
        break;

      default:
        break;
    }
  };

  const referenceElement = useMemo(
    () => (
      <div
        className="bg-main-gray-background h-full flex"
        onMouseEnter={() => setMouseEvent(true)}
        onMouseLeave={() => setMouseEvent(false)}
      >
        <div className="flex jusfiyt-center items-center px-8">
          {peopleCount > 1 ? <UsersIcon /> : <UserIcon />}
        </div>
        <p className="flex justify-end text-white pr-1">{peopleCount}</p>
      </div>
    ),
    [peopleCount]
  );

  const popperElement = useMemo(
    () => (
      <div className="bg-white p-4">
        <h1 className="mb-4 font-bold text-main-gray-primary">
          Kabin ve yolcu seçimi
        </h1>
        <div className="flex justify-center items-center gap-4">
          <Radio
            text="Economy Class"
            className="text-main-gray-primary font-semibold"
          />
          <Radio
            text="Bussiness Class"
            className="text-main-gray-primary font-semibold"
          />
        </div>
        <div className="flex justify-between mt-6 items-center">
          <p className="font-semibold">Yolcu</p>
          <div className="flex gap-4 items-center">
            <Button
              text="-"
              className="border-0 rounded-md bg-main-gray-secondary px-3 py-1"
              onClick={() => onPeopleCountButtonClick("decrement")}
            />
            <span>{peopleCount}</span>
            <Button
              text="+"
              className="border-0 rounded-md bg-main-gray-secondary px-3 py-1"
              onClick={() => onPeopleCountButtonClick("increment")}
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
      arrowEnabled
    />
  );
};

export default SelectPerson;
