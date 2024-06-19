import React from "react";
import Image from "next/image";
import skntLogo from "../../public/sknt-logo.png";
import AppStoreImg from "../../public/AppStore.png";
import GooglePlayImg from "../../public/GooglePlay.png";
import Banner from "./Banner";
import Link from "next/link";

const Hero = () => {
  return (
    <section className=" text-slate-950 flex items-center flex-col mt-28">
      <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <div className="mb-12 m flex justify-center">
            <Image src={skntLogo} alt="" height={150} />
          </div>
          <span className="w-8 h-2 bg-green-300  text-green-700 text-lg p-2 rounded-lg font-semibold">
            Beta
          </span>

          <h1 className="text-5xl font-extrabold sm:text-6xl mt-8">
            Get a grip of your{" "}
            <span className="italic font-light">moolah..</span>
            <strong className=" sm:block">
              {" "}
              from{" "}
              <span className="font-extrabold text-primary">
                Pennies to Plenty.
              </span>{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="flex justify-center m-4 gap-2">
            <Image src={AppStoreImg} alt="" height={48} width={144} />
            <Image src={GooglePlayImg} alt="" height={48} width={144} />
          </div>

          <span className="text-green-700 text-xl font-semibold">
            Coming soon
          </span>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded-full bg-slate-950 px-12 py-3 text-lg font-medium text-white shadow  focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
              href="/sign-up"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      <Banner
        bgColor="bg-green-300"
        textColor="text-green-950"
        textSize="text-5xl"
      >
        Budgeting without the faff.
      </Banner>
      <div>
        <Image
          src={"/"}
          width={1000}
          height={700}
          className="mt-16 mb-16 rounded-xl border-2"
          alt={""}
        />
      </div>
    </section>
  );
};

export default Hero;
