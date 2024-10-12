import React from "react";
import { useController } from "react-hook-form";
import { cn } from "@/utils/tailwind-merge";

interface Props {
  name: string;
  control: any;
  value?: string;
  label?: string;
  id?: string;
  customInputCss?: string;
  className?: string;
}

const Radio = ({
  customInputCss,
  name,
  control,
  value,
  label,
  id,
  className,
}: Props) => {
  const { field } = useController({ control, name });

  return (
    <div className={cn("flex items-center", className)}>
      <input
        id={id}
        type="radio"
        className={cn("focus:outline-none px-2", customInputCss)}
        {...field}
        value={value}
        checked={field.value === value}
        onChange={() => field.onChange(value)}
      />
      {label && <label className="ml-2">{label}</label>}
    </div>
  );
};

export default Radio;
