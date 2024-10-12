import { cn } from "@/utils/tailwind-merge";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  id?: string;
  text?: string;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { id, text, className, type = "submit", disabled, children, ...rest },
    ref
  ) => {
    return (
      <button
        id={id}
        ref={ref}
        className={cn(className)}
        disabled={disabled}
        type={type}
        {...rest}
      >
        {text}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
