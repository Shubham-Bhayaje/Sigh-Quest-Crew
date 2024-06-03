import React from "react";
import { Meteors } from "./ui/meteors";
import Image from "next/image";


function Services() {
  return (
    <div className="flex items-center justify-center h-full dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col mt-10">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl m-5 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-serif mt-20">
          WHY CHOOSE US
        </h3>
        <h1 className="font-bold bg-clip-text font-serif m-2 text-blue-500 text-center">
          Elevate Your Online Presence with an Intuitive Website
        </h1>
        <p className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-serif max-w-[70%] hidden sm:block">
          Discover the transformative ease of website creation with us. Craft a
          standout online presence effortlessly, regardless of your technical
          background. Our intuitive tools and customizable templates empower you
          to bring your unique vision to life seamlessly. Elevate your digital
          identity and engage your audience with a website that reflects your
          brand's essence, all without the complexities of traditional web
          development.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-4 h-full mt-20 mb-20">
        <div className="w-full max-w-xs relative md:w-auto md:max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
            {/* Content */}
            <Image src="/Android.png" alt="" width={100} height={100} className="m-4" />


            <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">
              Android Development
            </h1>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
              Bring your app ideas to life on Android, . Reach billions of users
              with a single codebase and unlock powerful features.
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        {/* Repeat for other sections as needed */}
        <div className="w-full max-w-xs relative md:w-auto md:max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
            {/* Content */}
            <Image src="/Web.png" alt="" width={100} height={100} className="m-4" />
            <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">
              Web Development
            </h1>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
              Our websites are built with lightning speed in mind. We prioritize
              fast loading times to keep your visitors engaged and coming back
              for more.
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full max-w-xs relative md:w-auto md:max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
            {/* Content */}
            <Image src="/Ai.png" alt="" width={100} height={100} className="m-4" />
            <h1 className="font-bold text-xl text-white mb-4 relative z-50">
              Machine learning
            </h1>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
              We tackle complex machine learning challenges. Let us leverage
              cutting-edge algorithms and powerful tools to build the solutions
              you need !
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
        <div className="w-full max-w-xs relative md:w-auto md:max-w-xs">
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
          <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-center">
            {/* Content */}
            <Image src="/Doc.png" alt="" width={100} height={100} className="m-4" />
            <h1 className="font-bold text-xl text-white mb-4 relative z-50 text-center">
              Documentation Management
            </h1>
            <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-center">
              Clear and concise documentation is key to successful projects. We
              craft easy-to-understand guides that empower your team and users.
            </p>

            {/* Meaty part - Meteor effect */}
            <Meteors number={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
