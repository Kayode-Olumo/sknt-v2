import React, { FC } from "react";
import SideBar from "./_component/SideBar";

interface IDashboardLayout {
  children: React.ReactNode;
}

const DashboardLayout: FC<IDashboardLayout> = ({ children }) => {
  return (
    <div>
      <div
        className="bg-stone-950 text-white h-screen md:w-64 hidden md:block fixed top-0 left-0 p-4 rounded-[1rem] m-4"
        style={{ maxHeight: "calc(100vh - 2rem)" }}
      >
        <SideBar />
      </div>
      <main className="md:ml-[17rem] p-6 m-4 md:px-14 px-3">{children}</main>
    </div>
  );
};

export default DashboardLayout;
