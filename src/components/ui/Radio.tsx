import { cn } from "@/utils/tailwind-merge";
import React from "react";

export interface RadioProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  className?: string;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ text, className }, ref) => {
    return (
      <div ref={ref} className={cn("flex", className)}>
        <input type="radio" />
        <label className="pl-1 text-sm">{text}</label>
      </div>
    );
  }
);
Radio.displayName = "Radio";

export { Radio };
