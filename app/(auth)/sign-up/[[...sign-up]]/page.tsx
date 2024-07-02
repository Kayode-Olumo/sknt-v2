import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import skntLogo from "../../../../public/logo-white.svg";

export default function Page() {
  return (
    <section className="bg-white">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-primary lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <Image src={skntLogo} alt="" />
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Get a grip of your{" "}
              <span className="italic font-light">moolah..</span>
            </h2>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-28 items-center justify-center  bg-white"
                href="#"
              >
                <Image src={skntLogo} alt="" />
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Get a grip of your{" "}
                <span className="italic font-light text-primary">moolah..</span>
              </h1>
            </div>
            <div className="text-center pt-16 space-y-4">
              <h1 className="font-bold text-3xl text-[#2e2a47]">
                New to sknt. ?
              </h1>
              <p className="text-base text-[#7e8ca0] pb-8 space-y-4">
                Login or sign up to get access to the dashboard
              </p>
            </div>
            <SignUp />
          </div>
        </main>
      </div>
    </section>
  );
}
