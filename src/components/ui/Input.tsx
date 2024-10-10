import React, { ReactElement } from "react";
import { cn } from "@/utils/tailwind-merge";

interface Props {
  text?: string;
  icon?: ReactElement<any, any>;
  customInputCss?: string;
  placeholder?: string;
}

const Input = ({ icon, customInputCss, ...rest }: Props) => {
  return (
    <div className="flex bg-white justify-center items-center">
      {icon && <div className="mx-2">{icon}</div>}
      <input
        type="text"
        className={cn("focus:outline-none px-2", customInputCss)}
        {...rest}
      />
    </div>
  );
};

export default Input;
