import { Faq } from "@/utils";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { FaArrowDownLong } from "react-icons/fa6";

export default function FAQs(): React.ReactElement {
  return (
    <div className="h-full flex flex-col lg:pb-16 items-center justify-center gap-10 lg:gap-28 shadow-sm border-x border-b px-4 lg:rounded-b-[50px] rounded-b-[30px] w-full">
      <div>
        <p className=" text-2xl lg:text-3xl">Frequently Asked Questions</p>
        <p className="text-[#656565] text-center mt-2 text-xs lg:text-sm">
          Answer to questions you will like to know
        </p>
      </div>
      <div className="w-full flex flex-col">
        {Faq.map((fq, id) => (
          <Disclosure
            key={id}
            as="div"
            className=" border-b  py-6"
            defaultOpen={id === 0 ? true : false}
          >
            <DisclosureButton className="group flex w-full items-center justify-between">
              <span className="text-sm/6 text-start font-medium text-black group-data-[hover]:text-black">
                {fq.question}
              </span>
              <FaArrowDownLong className="size-5 fill-black group-data-[hover]:fill-black group-data-[open]:rotate-180" />
            </DisclosureButton>
            <DisclosurePanel
              transition
              className="mt-2 text-xs lg:text-sm/5 text-black origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 w-[70%]"
            >
              {fq.answer}
            </DisclosurePanel>
          </Disclosure>
        ))}
      </div>
    </div>
  );
}
