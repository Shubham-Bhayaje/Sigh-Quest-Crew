"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

function Projects() {
  return (
    <div className="mt-20">
      <HeroParallax products={products} />
    </div>
  );
}

export const products = [
  {
    title: "",
    link: "https://gomoonbeam.com",
    thumbnail: "/Friday/One.png",
  },
  { title: "", link: "https://cursor.so", thumbnail: "/Friday/Two.png" },
  {
    title: "",
    link: "https://userogue.com",
    thumbnail: "/Friday/Three.png",
  },

  {
    title: "",
    link: "https://editorially.org",
    thumbnail: "/Friday/Four.png",
  },
  {
    title: "",
    link: "https://editrix.ai",
    thumbnail: "/Friday/Five.png",
  },
  {
    title: "",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/Friday/Six.png",
  },

  {
    title: "",
    link: "https://algochurn.com",
    thumbnail: "/Friday/Seven.png",
  },
  {
    title: "",
    link: "https://ui.aceternity.com",
    thumbnail: "/Friday/Eleven.png",
  },
  {
    title: "",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/Friday/12.png",
  },
  {
    title: "",
    link: "https://smartbridgetech.com",
    thumbnail: "/Friday/13.png",
  },
  {
    title: "",
    link: "https://renderwork.studio",
    thumbnail: "/Friday/14.png",
  },

  {
    title: "",
    link: "https://cremedigital.com",
    thumbnail: "/Friday/15.png",
  },
  {
    title: "",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/Friday/16.png",
  },
  {
    title: "",
    link: "https://invoker.lol",
    thumbnail: "/Friday/17.png",
  },
  {
    title: "",
    link: "https://efreeinvoice.com",
    thumbnail: "/Friday/18.png",
  },
];
export default Projects;
