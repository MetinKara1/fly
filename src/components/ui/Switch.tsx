import React, { useState } from "react";

interface SwitchProps {
  appliedPromotion: boolean;
  setAppliedPromotion: any;
}

const Switch = (props: SwitchProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    props.setAppliedPromotion(!props.appliedPromotion);
  };

  return (
    <label className="relative inline-block w-16 h-8 border-0 rounded-xl">
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span
        className={`slider round absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-all duration-300 rounded-2xl ${
          isChecked ? "bg-main-blue-background" : "bg-gray-300"
        }`}
      ></span>
      <span
        className={`absolute left-1 bottom-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
          isChecked ? "transform translate-x-8" : ""
        }`}
      ></span>
    </label>
  );
};

export default Switch;
