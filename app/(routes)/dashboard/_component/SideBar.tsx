"use client";
import Image from "next/image";
import React from "react";
import skntLogo from "../../../../public/logo-white.svg";
import {
  Coins,
  LayoutDashboard,
  Megaphone,
  ReceiptText,
  ShieldCheck,
  ShieldPlus,
  WalletCards,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SideBar = () => {
  const navItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      id: 2,
      name: "Budgets",
      icon: WalletCards,
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
    },
    {
      id: 4,
      name: "Income(upgrade)",
      icon: Coins,
    },
    {
      id: 5,
      name: "Investments(upgrade)",
      icon: LayoutDashboard,
    },
    {
      id: 6,
      name: "Alerts & Notifications(upgrade)",
      icon: Megaphone,
    },
    {
      id: 7,
      name: "Upgrade",
      icon: ShieldCheck,
    },
  ];
  return (
    <>
      <Link href="\">
        <Button className="bg-transparent hover:bg-transparent ">
          <Image src={skntLogo} alt="" />
        </Button>
      </Link>

      <div className="text-white grid gap-8">
        <div className="m-4 grid gap-8">
          {navItems.map((item) => (
            <h2
              key={item.id}
              className="flex gap-4 justify-start hover:text-primary cursor-pointer hover:font-semibold"
            >
              <item.icon />
              {item.name}
            </h2>
          ))}
        </div>
        <div className="fixed bottom-10 p-5 flex gap-2 item-center">
          <UserButton />
        </div>
      </div>
    </>
  );
};

export default SideBar;
