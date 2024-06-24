"use client";
import Image from "next/image";
import React, { useEffect } from "react";
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
import { usePathname, useSearchParams } from "next/navigation";

const SideBar = () => {
  const navItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Budgets",
      icon: WalletCards,
      path: "/dashboard/budgets",
    },
    {
      id: 3,
      name: "Expenses",
      icon: ReceiptText,
      path: "/dashboard/expenses",
    },
    {
      id: 4,
      name: "Income(upgrade)",
      icon: Coins,
      path: "/dashboard/income",
    },
    {
      id: 5,
      name: "Investments(upgrade)",
      icon: LayoutDashboard,
      path: "/dashboard/investments",
    },
    {
      id: 6,
      name: "Alerts & Notifications(upgrade)",
      icon: Megaphone,
      path: "/dashboard/alerts_notifications",
    },
    {
      id: 7,
      name: "Upgrade",
      icon: ShieldCheck,
      path: "/upgrade",
    },
  ];

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

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
            <Link href={item.path} key={item.id}>
              <h2
                className={`flex gap-4 justify-start hover:text-primary cursor-pointer hover:font-semibold ${
                  path == item.path && "text-primary"
                }`}
              >
                <item.icon />
                {item.name}
              </h2>
            </Link>
          ))}
          <div className="fixed bottom-10 left-28 p-5 flex gap-2 item-center ">
            <UserButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
