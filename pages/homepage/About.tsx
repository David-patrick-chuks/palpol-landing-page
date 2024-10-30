import { AboutPage } from "@/utils";
import Image from "next/image";
import { FC } from "react";

const About: FC = () => {
  return (
    <div className="px-4  flex flex-col gap-16 bg-white">
      <div className="w-full flex lg:flex-row gap-4 lg:gap-0 flex-col ">
        <div className="lg:w-[60%] w-full flex flex-col">
          <p className="text-[#182218] leading-[70px] font-normal text-[35px]">
            How it Works
          </p>
          <p className="text-[#959595] text-xs">Get started with the app</p>
        </div>
        <div className="lg:w-[40%] w-full flex flex-col gap-7">
          <p className="text-start text-[#656565] w-full">
            Get familiar with the 3 easy steps to get started.
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
      <div className="grid px-5 lg:px-0 lg:grid-cols-3 gap-5 grid-cols-1 lg:gap-24 ">
        {AboutPage.map((abt, id) => (
          <div key={id} className="flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#168314] text-[24px]">{abt.title}</p>
              <p className="text-[#656565] text-base">{abt.desp}</p>
            </div>
            <Image
              width={24}
              height={24}
              layout="responsive"
              blurDataURL={abt.img}
              placeholder="blur"
              key={id}
              src={abt.img}
              priority
              alt={`Feautures image ${id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
