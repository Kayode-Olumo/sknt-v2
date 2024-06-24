"use client";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

const DashboardBanner = () => {
  const [timeOfDay, setTimeOfDay] = useState("");

  useEffect(() => {
    const date = new Date();
    setTimeOfDay(getTimeOfDay(date));
  }, []);

  const getTimeOfDay = (date: Date) => {
    const hour = date.getHours();

    if (hour < 12) {
      return "morning";
    } else if (hour < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  };

  const today = `${new Date().getDate()} ${new Date().toLocaleString(
    "default",
    { month: "short" }
  )}, ${new Date().getFullYear()}`;

  const capitalizeFirstLetter = (value: string | null) => {
    if (!value) return value; // Handle empty strings
    return value.charAt(0).toUpperCase() + value.slice(1);
  };

  const { user } = useUser();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <h2 className="text-4xl">
          Good {timeOfDay}, {capitalizeFirstLetter(user.firstName)}
        </h2>
        <p className="text-stone-500 text-[1.2rem]">
          {today} |{" "}
          {`${String(new Date().getHours()).padStart(2, "0")}:${String(
            new Date().getUTCMinutes()
          ).padStart(2, "0")}`}
        </p>
      </div>
    </div>
  );
};

export default DashboardBanner;
