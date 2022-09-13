import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const SideAccordion = (props) => {
    return (
        <>
            {props?.data?.map((ele) => (
                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="hidden md:block border-b border-gray-900 bg-kanishka-60 my-4 w-64">
                                <div className="">
                                    <Disclosure.Button className="py-2 flex justify-between w-full text-white items-center gap-3">
                                        <span className="text-white text-semibold font-lg">
                                            {ele.title}
                                        </span>
                                        {open ? <BiChevronUp /> : <BiChevronDown />}
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="text-gray-500 text-sm">
                                        <div className="flex item-center gap-2 flex-wrap ">
                                            <div className="p-1">
                                                <span className="text-gray-500">{ele.des}</span>
                                            </div>
                                        </div>
                                    </Disclosure.Panel>
                                </div>
                            </div>
                        </>
                    )}
                </Disclosure>
            ))}
        </>
    );
};

export default SideAccordion;
