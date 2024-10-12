import React from "react";

const MainContainer: any = ({ children }: any) => {
  return (
    <div className="w-full h-full px-4 tablet:mx-auto mobile:px-6 tablet:px-8 laptop:px-12 desktop:px-16 desktop tablet:max-w-screen-tablet laptop:max-w-screen-laptop desktop:max-w-screen-desktop">
      {children}
    </div>
  );
};

export default MainContainer;
