import { cn } from "@/utils/tailwind-merge";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, className, type = "submit", disabled, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(className)}
        disabled={disabled}
        type={type}
        {...rest}
      >
        {text}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
