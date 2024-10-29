"use client";

import { NavLinks } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";

const Header: React.FC = () => {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  const toggleNavigation = () : void => {
    setMobileNav((prev) => !prev);
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex py-2 relative lg:py-8 px-5 items-center  lg:px-16 justify-between bg-transparent  w-full z-50">
      <div className="flex items-center justify-start gap-10 lg:w-1/2">
        <h1 className="text-2xl font-poppins text-[#168314] gap-1 font-black  flex items-center justify-center italic ">
          {" "}
          <Image width={20} height={20}  priority  src="/images/palpol.png" className="w-5" alt="palpol Logo" />
          PalPol
        </h1>
        <p
          className={`lg:flex ${
            mobileNav
              ? " bg-white flex gap-5 justify-center items-center  px-5 py-5  flex-col left-0 top-full absolute w-full "
              : " hidden"
          } gap-11`}
        >
          {NavLinks.map((link) => (
            <a
              key={link.id}
              href={link.target}
              className="text-black lg:text-white cursor-pointer"
              onClick={(e) => handleScroll(e, link.target)}
            >
              {link.label}
            </a>
          ))}
        </p>
      </div>
      <div className="w-1/2 hidden lg:flex justify-end">
        <p className="  rounded-[5px] py-3 px-[10px] text-white border border-solid border-white bg-black text-xs">
          Get Started Now
        </p>
      </div>
      <div
        onClick={toggleNavigation}
        className=" lg:hidden rounded-[5px] p-1 text-white border border-solid border-white hover:bg-black/80 bg-black text-xl"
      >
        {mobileNav ? (<MdClose />) : (<RiMenu4Fill />)}
      </div>
    </div>
  );
};
export default Header;
