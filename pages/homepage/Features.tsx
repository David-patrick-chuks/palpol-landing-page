import { featuresImage } from "@/utils";
import React from "react";

const Features: React.FC = () => {
  return (
    <div className="px-4 py-10 lg:px-32 flex flex-col gap-14 bg-white">
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
              <img src="/images/apple.png" className="w-5 lg:w-6" alt="" />
              Download now
            </p>{" "}
            <p className="py-2 capitalize lg:text-xs rounded-3xl text-xs px-3 gap-2 bg-[#168314] flex items-center justify-center">
              <img className="w-5 lg:w-6" src="/images/gplay.png" alt="" />
              Download now
            </p>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2  gap-5 grid-cols-1 lg:gap-10 ">
        {featuresImage.map((image, id) => (
          <img key={id} src={image} alt={`Feautures image ${id}`} />
        ))}
      </div>
    </div>
  );
};

export default Features;
