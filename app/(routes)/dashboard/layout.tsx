import React, { FC } from "react";
import SideBar from "./_component/SideBar";

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout: FC<IDashboardLayout> = ({ children }) => {
  return (
    <div>
      <div
        className="bg-black text-white h-screen md:w-64 fixed top-0 left-0 p-4 rounded-[1rem] m-4"
        style={{ maxHeight: "calc(100vh - 2rem)" }}
      >
        <SideBar />
      </div>
      <div className="md:ml-[17rem] p-6 bg-amber-200 m-4">{children}</div>
    </div>
  );
};

export default DashboardLayout;
