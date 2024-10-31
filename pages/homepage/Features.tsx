import { featuresImage } from "@/utils";
import Image from "next/image";
import React from "react";

const Features: React.FC = () => {
  return (
    <div className="px-4 flex flex-col gap-8 lg:gap-14 bg-white">
      <div className="w-full flex lg:flex-row gap-4 lg:gap-0 flex-col ">
        <div className="lg:w-[60%] w-full flex flex-col">
          <p className="text-[#182218] leading-[70px] font-normal text-[45px]">
            Features
          </p>
          <p className="text-[#959595] text-base">Unlimited reach</p>
        </div>
        <div className="lg:w-[40%] w-full flex flex-col gap-7">
          <p className="text-start text-[#656565] w-full">
            Palpol is packed with amazing features beneficial individually and
            society at large.
          </p>
          <div className="flex gap-5  text-white items-center lg:flex-row justify-start">
            <p className="py-2 capitalize lg:text-xs rounded-3xl px-3 gap-1  text-xs bg-[#168314] flex items-center justify-center">
              <Image
                width={24}
                height={24}
                priority
                blurDataURL={"/images/apple.png"}
                
                alt="download"
                src="/images/apple.png"
              />
              Download now
            </p>{" "}
            <p className="py-2 capitalize lg:text-xs rounded-3xl text-xs px-3 gap-2 bg-[#168314] flex items-center justify-center">
              <Image
                width={24}
                height={24}
                priority
                blurDataURL={"/images/gplay.png"}
                
                alt="download"
                src="/images/gplay.png"
              />
              Download now
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2  gap-5 grid-cols-1 lg:gap-10 ">
        {featuresImage.map((image, id) => (
          <Image
            width={24}
            height={24}
            layout="responsive"
            blurDataURL={image}
            
            key={id}
            priority
            src={image}
            alt={`Feautures image ${id}`}
          />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row h-full justify-center w-full">
        <div className=" lg:w-1/2 h-full flex py-10 lg:py-24 flex-col gap-8 lg:gap-[90px]">
          <div className=" w-full flex flex-col">
            <p className="text-[#182218] lg:leading-[70px] font-normal text-[40px] lg:text-[45px]">
              Special Feature
            </p>
            <p className="text-[#959595] w-[70%] text-start text-xs lg:text-sm">
              This special feature gives voters the access to locate their
              polling unit with the help of a map directly from Naijawalk App.
            </p>
          </div>
          <div className="flex gap-5 lg:w-[70%]  text-white items-center lg:flex-row justify-start">
            <p className="py-2 capitalize lg:text-xs rounded-3xl px-3 gap-1  text-xs bg-[#168314] flex items-center justify-center">
              <Image
                width={24}
                height={24}
                priority
                blurDataURL={"/images/apple.png"}
                
                alt="download"
                src="/images/apple.png"
              />
              Download now
            </p>{" "}
            <p className="py-2 capitalize lg:text-xs rounded-3xl text-xs px-3 gap-2 bg-[#168314] flex items-center justify-center">
              <Image
                width={24}
                height={24}
                priority
                blurDataURL={"/images/gplay.png"}
                
                alt="download"
                src="/images/gplay.png"
              />
              Download now
            </p>
          </div>
        </div>
        <div className=" w-full lg:w-1/2 h-full">
          <Image
            width={24}
            height={24}
            priority
            layout="responsive"
            blurDataURL={"/images/map.png"}
            
            alt="download"
            src="/images/map.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
