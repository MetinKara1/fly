import React from "react";
import Link from "next/link";
import Input from "./ui/Input";
import { cn } from "@/utils/tailwind-merge";

interface HeaderProps {
  mode?: "default" | "dark";
}

const Header: React.FC<HeaderProps> = ({ mode = "default" }) => {
  return (
    <div
      className={cn(
        "w-full flex justify-between border-b mt-6",
        mode === "dark" && "text-white"
      )}
    >
      <Link href="https://turkishairlines.com" className="font-bold">
        turkishairlines.com
      </Link>
      <div className="flex">
        <div>
          <Input
            text="search"
            customInputCss={cn(mode === "dark" && "bg-main-blue-primary")}
            placeholder="search"
          />
        </div>
        <div>
          <span className="font-bold">Flight Challenge</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
