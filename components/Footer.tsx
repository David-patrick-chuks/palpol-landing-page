import Image from "next/image";
import { FC } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: FC = () => {
  const date: number = new Date().getFullYear();

  const footer: string[] = [
    `© ${date} All Rights Reserved, Naijawalk.`,
    "Terms of Use",
    "Privacy Policy",
  ];

  return (
    <div className="bg-[#168314] lg:py-0 py-3 h-[45dvh] lg:h-[60dvh] flex w-full overflow-hidden lg:rounded-[50px] px-4">
      <div className=" w-full lg:w-1/2 lg:pl-8 flex flex-col justify-between pb-1">
        <div className="flex flex-col gap-7 pt-3">
          <p className="text-4xl lg:text-[50px] leading-none text-white font-extrabold">DOWNLOAD NOW</p>
          <div className="flex gap-5  text-white items-center lg:flex-row justify-start">
            <p className="py-2 capitalize lg:text-xs border rounded-3xl px-3 gap-1  text-xs border-[#ffffff] flex items-center justify-center">
              <Image
                width={24}
                height={24}
                priority
                blurDataURL={"/images/apple.png"}
                
                src="/images/apple.png"
                alt="download"
              />
              Download now
            </p>{" "}
            <p className="py-2 capitalize lg:text-xs rounded-3xl text-xs px-3 gap-2 border border-[#ffffff] flex items-center justify-center">
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
          <div className="flex gap-[10px]">
            <div className="p-[5px] rounded-[10px] bg-white">
              <FaXTwitter size={40} />
            </div>
            <div className="p-[5px] rounded-[10px] bg-white">
              <FaFacebook size={40} color="#1877F2" />
            </div>
            <div className="p-[5px] rounded-[10px] bg-white">
              <FaLinkedin size={40} color="#0076B2" />
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col-reverse gap-3">
          {footer.map((item, index) => (
            <p key={index} className="text-xs font-normal text-white capitalize">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 hidden lg:flex justify-end items-center h-full">
        {" "}
        <img
          className="h-full"
          src={"/images/footer.png"}
          alt={`Footer image`}
        />
      </div>
    </div>
  );
};
export default Footer;
