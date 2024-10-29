import { benefits } from "@/utils";
import Image from "next/image";
import { FC } from "react";

const Benefits: FC = () => {
  return (
    <div className="px-4   flex flex-col gap-24 bg-white">
      <div className="w-full flex lg:flex-row gap-4 lg:gap-0 flex-col ">
        <div className="lg:w-[60%] w-full flex flex-col">
          <p className="text-[#182218] leading-[70px] font-normal text-[35px]">
            Benefits
          </p>
          <p className="text-[#959595] text-xs">We give quality</p>
        </div>
        <div className="lg:w-[40%] w-full flex flex-col gap-7">
          <p className="text-start text-[#656565] w-full">
            Take advantage of every benefits, and take charge of every step.
          </p>
          <div className="flex gap-5  text-white items-center lg:flex-row justify-start">
            <p className="py-2 capitalize lg:text-xs rounded-3xl px-3 gap-1  text-xs bg-[#168314] flex items-center justify-center">
              <Image
                width={24}
                height={24}
                priority
                blurDataURL={"/images/apple.png"}
                placeholder="blur"
                src="/images/apple.png"
                alt="download"
              />
              Download now
            </p>{" "}
            <p className="py-2 capitalize lg:text-xs rounded-3xl text-xs px-3 gap-2 bg-[#168314] flex items-center justify-center">
              <Image
                width={24}
                height={24}
                priority
                blurDataURL={"/images/gplay.png"}
                placeholder="blur"
                alt="download"
                src="/images/gplay.png"
              />
              Download now
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:gap-16">
        {benefits.map((value) => (
          <div key={value.id} className={`flex w-full ${value.id % 2=== 0 ? "justify-start" :"justify-end"}`} >
            <div className={`lg:w-[70%] w-full items-center flex ${value.id % 2=== 0 ? "flex-row-reverse" :"flex-row"}`}  >
              <div className="p-[5px] hidden lg:flex mr-2 items-center justify-center bg-[#168314]/20 w-8 h-8 rounded-full">
                <span className="bg-[#168314]   w-full h-full rounded-full">
                  {" "}
                </span>
              </div>
              <div className="w-[30%] hidden lg:block bg-[#168314]/30 h-[1.2px]"></div>
              <div className="lg:w-[60%] w-full lg:ml-6 bg-[#168314]/10 p-5 rounded-[20px]">
                <div className="p-6 rounded-[10px] bg-[#168314]/10">
                  <p className="text-[#168314] text-xl">{value.title}</p>
                  <p className="text-[#333333] text-base ">{value.details}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Benefits;
