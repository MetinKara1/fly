import React from "react";
import Link from "next/link";
import Input from "./ui/Input";

const Header = () => {
  return (
    <div className="w-full flex justify-between text-white border-b mt-6">
      <Link href="https://turkishairlines.com" className="font-bold">
        turkishairlines.com
      </Link>
      <div className="flex">
        <div>
          <Input
            text="search"
            customInputCss="bg-main-blue-primary text-white"
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
