import { ITestimony, TestimonyData } from "@/utils";
import Image from "next/image";
import { ReactElement } from "react";
import { FaStar } from "react-icons/fa";

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
      <div className="flex mt-3 h-[350px] lg:mt-0 w-full flex-col lg:flex-row gap-8">
        <div className="lg:block hidden w-[30%]"></div>
        {TestimonyData.map((data: ITestimony, id : number) => {
          const totalRating : number = 5 
          return (
          <div key={id} className={`w-full pb-4 pt-7 px-3 shadow rounded-[20px] flex justify-between h-full items-start flex-col lg:w-[35%]`}>
            <div className="flex flex-col gap-1">
              <p className="text-lg text-black">{data.name}</p>
              <p className="text-xs text-[#959595]">{data.title}</p>
              <p className="flex gap-[1px]">{
                [...Array(totalRating)].map((_, i) =>(
                  <span key={i} className={` ${ i < data.rating ? "text-yellow-600" : "text-gray-500"}`}><FaStar /></span>
                ))
              }</p>
            </div>
            <p className="text-sm w-[90%] text-[#333333]">&quot;{data.comment}&quot;</p>
            <p className="py-2 capitalize  rounded-3xl text-xs gap-2  flex items-center ">
              <Image
                width={12}
                height={12}
                priority
                blurDataURL={data.appLogo}
                
                alt="download"
                src={data.appLogo}
              />
              Play Store
            </p>
          </div>
        )})}
      </div>
    </div>
  );
}
