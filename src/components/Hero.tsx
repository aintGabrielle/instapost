import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="w-full">
      <div className="w-full flex flex-col md:flex-row ">
        <div className="w-fit ">
          <div className="py-7 px-12 space-y-3">
            <h1 className="text-3xl md:text-5xl tracking-wider font-serif font-bold text-red-500">
              WE ARE, <br /> INSTAPOST PH
            </h1>
            <p className="text-2xl">
              Content Marketing & <br /> Social Media Marketing Agency
            </p>
            <Button className="bg-red-500" variant={"default"}>
              <Link href={"/about"}>FIND OUT MORE!</Link>
            </Button>
          </div>
        </div>
        <div className="w-full md:flex-row flex-col  h-full relative">
          <div className="text-center">
            <h1 className="text-red-500 text-5xl font-semibold font-serif">
              Get Ready!
            </h1>
            <p className="text-2xl font-serif font-semibold">
              To grow your brand with
            </p>
            <h1 className="text-red-500 text-3xl font-semibold font-serif">
              CONTENT THAT SELLS!
            </h1>
          </div>
          <div className="w-64 h-64 relative">
            <Image
              fill
              src={"/Submark.png"}
              alt="Hero Image"
              className="object-contain "
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
