import { userTestimonyImage } from "@/utils";
import Image from "next/image";
import { ReactElement } from "react";

export default function Testimony(): ReactElement {
  return (
    <div className="px-4 flex flex-col gap-2">
      <div className="w-full  flex lg:flex-row gap-4 lg:gap-0 flex-col ">
        <div className="lg:w-[60%] w-full flex flex-col">
          <p className="text-[#182218] leading-[70px] font-normal text-[40px] lg:text-[45px]">
            User Reviews
          </p>
          <p className="text-[##656565] text-base">App Review</p>
        </div>
        <div className="lg:w-[40%] w-full flex flex-col gap-7">
          <p className="text-start text-[#656565] w-full">
            We are committed to serve the best. We take both positive and
            negative comments to improve..
          </p>
        </div>
      </div>
      <div className="flex mt-3 lg:mt-0 w-full flex-col lg:flex-row gap-8">
        <div className="lg:block hidden w-[30%]"></div>
        {userTestimonyImage.map((image, id) => (
          <div key={id} className={`w-full lg:w-[35%]`}>
            <Image
              width={24}
              height={24}
              layout="responsive"
              priority
              blurDataURL={image}
              placeholder="blur"
              alt="download"
              src={image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
