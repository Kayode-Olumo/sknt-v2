"use client";
import React from "react";
import Image from "next/image";
import skntLogo from "../../public/logo.svg";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { user, isSignedIn } = useUser();

  return (
    <div className="fixed top-0 w-full flex justify-between p-2 border-b-2 border-stone-950 bg-white">
      <Image src={skntLogo} alt={""} width={180} height={100} />
      <div className="flex gap-6 mt-auto mb-auto ">
        <Button className="text-xl" variant="link">
          Explore
        </Button>
        <Button className="text-xl" variant="link">
          Support
        </Button>
      </div>

      <div className="mr-10 h-full m-auto gap-4 flex">
        {!isSignedIn ? (
          <>
            <Link href={"/sign-in"}>
              <Button
                className="text-sm p-[1.48rem] border-black border-2 bg-transparent text-slate-950 hover:border-primary hover:bg-transparent hover:text-primary shadow-lg rounded-full"
                variant="outline"
              >
                Login
              </Button>
            </Link>

            <Link href={"/sign-up"}>
              <Button
                className="text-sm p-[1.48rem] border-black border-2 bg-black text-slate-100 hover:border-primary  hover:bg-primary shadow-lg rounded-full"
                variant="outline"
              >
                Sign up
              </Button>
            </Link>
          </>
        ) : (
          <>
            <Link href={"/dashboard"}>
              <Button
                className="text-sm p-[1.48rem] border-black border-2 bg-black text-slate-100 hover:border-primary  hover:bg-primary shadow-lg rounded-full"
                variant="outline"
              >
                Dashboard
              </Button>
            </Link>

            <UserButton />
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
