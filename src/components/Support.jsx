import React from "react";
import { PhoneIcon, ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, CogIcon } from "@heroicons/react/24/solid";
import SupportImg from "../assets/support.jpg";

const Support = () => {
  return (
    <div className="w-full h-screen mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={SupportImg}
          alt="/"
        />
      </div>
      <div className="max-w-[1240px] max-auto text-white relative">
        <div className="px-8 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h3>
          <p className="py-4 text-3xl text-slate-300 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            cursus iaculis risus, vitae tincidunt felis posuere sed. Aenean a
            consequat lectus. Vivamus eget tincidunt erat. In hac habitasse
            platea dictumst. Integer sodales, quam ut ornare ullamcorper, justo
            nibh vulputate mauris, eget mollis sem felis et risus. Nullam id mi
            eu neque accumsan placerat a in velit. Sed cursus a ante
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
                <p className="font-bold text-3xl my-6">Sales</p>
                <p className="text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus at nunc a eros tincidunt scelerisque. Nullam porttitor
                  lacus at maximus congue. Donec ut est erat. Duis sit amet
                  ornare risus.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <CogIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
                <p className="font-bold text-3xl my-6">Technical Support</p>
                <p className="text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus at nunc a eros tincidunt scelerisque. Nullam porttitor
                  lacus at maximus congue. Donec ut est erat. Duis sit amet
                  ornare risus.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl">
              <div className="p-8">
                <CpuChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-xl mt-[-4rem]" />
                <p className="font-bold text-3xl my-6">Media Inquiries</p>
                <p className="text-gray-600 text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus at nunc a eros tincidunt scelerisque. Nullam porttitor
                  lacus at maximus congue. Donec ut est erat. Duis sit amet
                  ornare risus.
                </p>
              </div>
              <div className="bg-slate-100 pl-8 py-4">
                <p className="flex items-center text-indigo-600">
                  Contact Us <ArrowSmallRightIcon className="w-5 ml-2" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
