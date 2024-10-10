import { cn } from "@/utils/tailwind-merge";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, className, ...rest }, ref) => {
    return (
      <button ref={ref} className={cn(className)} {...rest}>
        {text}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
