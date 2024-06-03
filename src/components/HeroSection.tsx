"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/moving-border";
import { Spotlight } from "./ui/Spotlight";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { animate, stagger } from "framer-motion";

const wordss = `At SIGH. we are a dedicated team of developers specializing in
crafting custom websites, Android Applications, and cutting-edge
machine learning projects. Our mission is to transform your ideas into
reality with precision and creativity, tailored to meet your unique
needs and aspiration.
`;
const wordss2 = `At SIGH. we are a dedicated team of developers specializing in
crafting custom websites, Android Applications, and cutting-edge
machine learning projects. Our mission is to transform your ideas into
reality with precision and creativity, tailored to meet your unique
needs and aspiration.
`;
export function TextGenerateEffectDemo() {
  return <TextGenerateEffect wordss={wordss} />;
}
export function TextGenerateEffectDemo0() {
  return <TextGenerateEffect wordss={wordss2} />;
}
const people = [
  {
    id: 1,
    name: "Shubham Bhayaje",
    designation: "Full Stack Developer",
    image: "/Shubham.png",
  },
  {
    id: 2,
    name: "Aditya Rathivadekar",
    designation: "Lead Developer",
    image: "/Aditya.png",
  },
  {
    id: 3,
    name: "Manas Surve",
    designation: "Lead Designer / Android Developer",
    image: "/Manas.png",
  },
  {
    id: 4,
    name: "Shubham Salunkhe",
    designation: "Web Backend Developer",
    image: "/Salunkhe.png",
  },
];

const words = [
  {
    text: "-",
  },
  {
    text: "Where",
  },
  {
    text: "Innovation",
  },
  {
    text: "Meets",
  },
  {
    text: "Expertise!",
    className: "text-blue-500 dark:text-blue-500",
  },
];

function HeroSection() {
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.1),
      }
    );
  }, []);

  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-40 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 font-serif">
          Sigh Quest Crew
        </h1>
        <h1 className="mt-2 font-normal md:text-lg max-w-lg mx-auto text-blue-600 font-serif flex items-center justify-center">
          <TypewriterEffectSmooth words={words} />
        </h1>

        <h1 className="mt-2 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto font-serif">
          <TextGenerateEffect wordss={wordss} />
        </h1>

        <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
          <AnimatedTooltip items={people} />
        </div>
        <div className="mt-4"></div>
        <Link href={"/Projects"}>
          <Button
            borderRadius="1.7rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-900 font-serif border-4"
          >
            Your Project
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
