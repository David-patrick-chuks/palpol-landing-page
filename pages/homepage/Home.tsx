import Header from "@/components/Header";
import { HeroLinks } from "@/utils";
import { CgArrowRight } from "react-icons/cg";

export default function Hero(): React.ReactElement {
  return (
    <>
      <div className="w-full bg-[url('/images/mobile.png')] lg:bg-[url('/images/mainBg.png')] h-screen lg:h-fit overflow-hidden  bg-cover bg-no-repeat bg-top lg:pb-20 relative  bg-white flex flex-col">
        <Header />
        <div className="z-50 h-full gap-4 text-center grid w-full flex-col lg:h-screen grid-cols-1 grid-rows-4 lg:grid-rows-4 ">
          <div className="lg:row-span-2 row-span-1"></div>
          <div className="text-center w-full lg:place-content-start place-content-end flex  lg:p-0  p-5 flex-col items-center gap-6 lg:gap-8">
            <h1 className="font-extrabold text-4xl text-[#F7FFF7] lg:text-[55px]">
              Connect, Engage, Empower with PalPol
            </h1>
            <h1 className="font-medium px-2 text-sm text-[#BEBFBE] lg:text-[21px]">
              Your all-in-one app for socializing, tech updates, political
              engagement, entertainment and more
            </h1>

            <div
              className="flex gap-7 
             text-white items-center lg:flex-row justify-center"
            >
              <p className="py-3 capitalize lg:text-base rounded-3xl px-3 gap-1  text-xs bg-[#168314] flex items-center justify-center">
                <img src="/images/apple.png" className="w-5 lg:w-6" alt="" />
                Download now
              </p>{" "}
              <p className="py-3 capitalize lg:text-base rounded-3xl text-xs px-3 gap-2 bg-[#168314] flex items-center justify-center">
                <img className="w-4 lg:w-4" src="/images/gplay.png" alt="" />
                Download now
              </p>
            </div>
          </div>
          <div className="flex px-2 flex-wrap gap-2 w-full  justify-center items-center lg:items-end">
            {HeroLinks.map((link, index) => (
              <p
                className="flex gap-2 items-center justify-center text-xs lg:text-xl text-[#616161] "
                key={index}
              >
                {link === "Business" ? (
                  <>{link}</>
                ) : (
                  <>
                    {link}
                    <span>
                      <CgArrowRight />
                    </span>
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
