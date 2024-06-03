"use client";

import Link from "next/link";

import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { IconAppWindow } from "./tabler/icons-react";
import Image from "next/image";

function About() {
  return (
    <div className="py-12 dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center flex-col mt-20">
      <div>
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="  text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl font-serif mt-20">
            Our Executive Team
          </h2>
          <p className="text-base font-semibold tracking-wide uppercase m-10 text-center max-w-lg font-serif">
            We're a skilled team that builds user-friendly websites, writes
            clear documentation, develops engaging Android apps, and tackles
            complex machine learning projects.
          </p>
        </div>
      </div>
      <div className="w-[90vw]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center gap-6">
          <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/Shubham.png`}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Shubham Bhayaje
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 lg:mr-6 ">
                Full Stack Developer
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/Aditya.png`}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-full border-[2px]"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Aditya Rathivadekar
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 lg:mr-14">
                Lead Developer
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/Manas.png`}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Manas Surve
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Lead Designer / Android Developer
              </p>
            </div>
          </BackgroundGradient>
          <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Image
              src={`/Salunkhe.png`}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain rounded-full border-[2px]"
            />
            <div className="flex flex-col items-center justify-center">
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                Shubham Salunkhe
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Web Backend Developer
              </p>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}

export default About;
