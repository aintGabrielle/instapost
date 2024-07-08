import Link from "next/link";
import React, { use, useReducer } from "react";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [status, setStatus] = useState(false);
  const navs = [
    {
      title: "HOME",
      url: "/",
    },
    {
      title: "ABOUT US",
      url: "/about",
    },
    {
      title: "SERVICES",
      url: "/service",
    },
    {
      title: "PROJECTS",
      url: "/project",
    },
    {
      title: "GET A QUOTE",
      url: "/quote",
    },
    {
      title: "CONTACT US",
      url: "/contact",
    },
  ];
  return (
    <nav className="w-full h-full flex justify-between items-center text-red-500 bg-[#FED00D] px-3">
      <Link
        href="/"
        className="relative scale-110 md:scale-150 w-[170px] h-[100px]"
      >
        <Image
          src={"/Submark.png"}
          fill
          className="object-contain "
          alt="Submark"
        />
      </Link>
      <div className="hidden md:flex gap-5 text-lg font-semibold text-[#D61F27]">
        <Link
          href={"/"}
          className={router.pathname == "/" ? "text-red-900" : "text-red-500"}
        >
          HOME
        </Link>
        <Link
          href={"/about"}
          className={
            router.pathname == "/about" ? "text-red-900" : "text-red-500"
          }
        >
          ABOUT US
        </Link>
        <Link
          href={"/services"}
          className={
            router.pathname == "/services" ? "text-red-900" : "text-red-500"
          }
        >
          SERVICES
        </Link>
        <Link
          href={"/contact"}
          className={
            router.pathname == "/contact" ? "text-red-900" : "text-red-500"
          }
        >
          CONTACT US
        </Link>
        <Link
          href={"/quote"}
          className={
            router.pathname == "/quote" ? "text-red-900" : "text-red-500"
          }
        >
          GET A QUOTE
        </Link>
      </div>
      <div className="visible md:hidden" onClick={() => setStatus(!status)}>
        <IoMenu size={45} />
      </div>
      <div
        className={
          status
            ? "flex flex-col justify-between md:hidden fixed top-0 right-0 h-screen bg-yellow-300 items-center transition-all ease-out duration-300 px-8 py-4 text-xl z-20"
            : "flex flex-col md:hidden fixed justify-between top-0 right-[-250px] h-screen items-center transition-all ease-in duration-500 px-8 py-4 text-xl space-y-3 z-20"
        }
      >
        <div></div>
        <div className="flex flex-col md:hidden space-y-3 font-semibold">
          {navs.map((item, index) => (
            <Link
              href={item.url}
              onClick={() => setStatus(!status)}
              key={index}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <IoClose size={45} onClick={() => setStatus(!status)} />
      </div>
      <div
        onClick={() => setStatus(!status)}
        className={
          status
            ? "z-0 top-0 left-0 bg-black/80 w-full h-screen absolute duration-500 transition-all ease-out"
            : "hidden duration-500 transition-all ease-out"
        }
      ></div>
    </nav>
  );
};

export default Navbar;
